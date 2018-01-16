const next = require('next');
const express = require('express');

//env
require('dotenv').config();


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';


// const app = next({ dev })
const app = next({dir: './', dev});
const handle = app.getRequestHandler();


//Route
const routes = require('./routes');
const handler = routes.getRequestHandler(app);


//i18next
const i18n = require('./i18next');
const Backend = require('i18next-node-fs-backend');
const i18nextMiddleware = require('i18next-express-middleware');


//Parse
const path = require('path');
const {parse} = require('url');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');


//JWT
const jwt = require('jsonwebtoken');


// init i18next with serverside settings
// using i18next-express-middleware
i18n
    .use(Backend)
    .use(cookieParser())
    .use(i18nextMiddleware.LanguageDetector)
    .init({
        preload: ['en-US', 'zh-CN', 'zh-TW'], // preload all langages
        whitelist: ['en-US', 'zh-CN', 'zh-TW'],
        fallbackLng: 'en-US',
        ns: ['common'], // need to preload all the namespaces
        defaultNS: 'common',
        load: 'currentOnly', // language codes to lookup, given set language is 'en-US': 'all' --> ['en-US', 'en', 'dev'], 'currentOnly' --> 'en-US', 'languageOnly' --> 'en'
        detection: {
            order: ['querystring', 'cookie', 'header'],
            lookupQuerystring: 'lang',
            caches: false, // ['cookie']
        },
        backend: {
            loadPath: path.join(__dirname, '../static/locales/{{lng}}/{{ns}}.json'),
            addPath: path.join(__dirname, '../static/locales/{{lng}}/{{ns}}.missing.json'),
        },
    }, () => {
        // loaded translations we can bootstrap our routes
        app.prepare()
            .then(() => {

                const server = express();

                server.use(bodyParser.json())
                server.use(bodyParser.urlencoded({ extended: false }))
                server.use(cookieParser())

                server.post('/authenticate', (req, res) => {
                    const {username, password} = req.body
                    if (username === 'test' || password === 'test') {
                        var token = jwt.sign({
                            username: username,
                            xsrfToken: crypto.createHash('md5').update(username).digest('hex')
                        }, 'jwtSecret', {
                            expiresIn: 60 * 60
                        });
                        res.status(200).json({
                            success: true,
                            message: 'Enjoy your token',
                            token: token
                        })
                    } else {
                        res.status(400).json({
                            success: false,
                            message: 'Authentication failed'
                        })
                    }
                })


                // Authenticate middleware
                // We will apply this middleware to every route except '/login' and '/_next'
                server.use(unless(['/login', '/_next'], (req, res, next) => {
                    const token = req.cookies['x-access-token'];
                    if (token) {
                        jwt.verify(token, 'jwtSecret', (err, decoded) => {
                            if (err) {
                                res.redirect('/login');
                            } else {
                                // if everything is good, save to request for use in other routes
                                req.decoded = decoded;
                                next();
                            }
                        })
                    } else {
                        res.redirect('/login');
                    }
                }))


                // Api example to prevent CRSF attack
                server.post('/api/preventCRSF', (req, res, next) => {
                    console.log(req.decoded);
                    if (req.decoded.xsrfToken === req.get('X-XSRF-TOKEN')) {
                        res.status(200).json({
                            success: true,
                            message: 'Yes, this api is protected by CRSF attack'
                        })
                    } else {
                        res.status(400).json({
                            success: false,
                            message: 'CRSF attack is useless'
                        })
                    }
                })


                // enable middleware for i18next
                server.use(i18nextMiddleware.handle(i18n));

                // serve locales for client
                server.use('/locales', express.static(path.join(__dirname, '../static/locales')));

                // missing keys
                server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n));





                // use next.js
                server.get('*', (req, res) => {
                    const parsedUrl = parse(req.url, true);
                    const rootStaticFiles = [
                        '/robots.txt',
                        '/sitemap.xml',
                        '/favicon.ico',
                    ];
                    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
                        app.serveStatic(req, res, path.join(__dirname, 'static', parsedUrl.pathname));
                        return false;
                    } else {
                        return handle(req, res);
                    }
                });

                server.listen(port, (err) => {
                    if (err) throw err;
                    console.log(`> Ready on http://localhost:${port}`);
                });
            });
    });

i18n.on('languageChanged', (lng) => {
    // Keep language in sync
    req.language = req.locale = req.lng = lng;
    req.languages = i18next.services.languageUtils.toResolveHierarchy(lng);
    if (i18next.services.languageDetector) {
        i18next.services.languageDetector.cacheUserLanguage(req, res, lng);
    }
});



function unless (paths, middleware) {
    return function(req, res, next) {
        let isHave = false
        paths.forEach((path) => {
            if (path === req.path || req.path.includes(path)) {
                isHave = true
                return
            }
        })
        if (isHave) {
            return next()
        } else {
            return middleware(req, res, next)
        }
    }
}