const express = require('express')
const next = require('next')
const path = require('path')
const { parse } = require('url')

require('dotenv').config()


const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
const app = next({dir: './', dev})
const handle = app.getRequestHandler()

const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const i18n = require('./src/i18n')
const cookieParser = require('cookie-parser')

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
            // order: ["localStorage", "navigator"],
            lookupLocalStorage: 'i18nextLng',
            order: ['querystring', 'cookie', 'header'],
            lookupQuerystring: "lang",
            lookupCookie: 'i18next',
            // cache user language
            caches: false, // ['cookie']
            // cookieDomain: 'localhost',
        },
        backend: {
            loadPath: path.join(__dirname, './static/locales/{{lng}}/{{ns}}.json'),
            addPath: path.join(__dirname, './static/locales/{{lng}}/{{ns}}.missing.json')
        }
    }, () => {
        // loaded translations we can bootstrap our routes
        app.prepare()
            .then(() => {
                const server = express()

                // enable middleware for i18next
                server.use(i18nextMiddleware.handle(i18n))

                // serve locales for client
                server.use('/locales', express.static(path.join(__dirname, '/static/locales')))

                // missing keys
                server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))




                // use next.js
                server.get('*', (req, res) => {

                    const parsedUrl = parse(req.url, true)
                    const rootStaticFiles = [
                        '/robots.txt',
                        '/sitemap.xml',
                        '/favicon.ico'
                    ]
                    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
                        app.serveStatic(req, res, path.join(__dirname, 'static', parsedUrl.pathname))
                    } else {
                        return handle(req, res)
                    }

                })




                server.listen(port, (err) => {
                    if (err) throw err
                    console.log(`> Ready on http://localhost:${port}`)
                })
            })
    })

i18n.on('languageChanged', function (lng) {
    // Keep language in sync
    req.language = req.locale = req.lng = lng;
    req.languages = i18next.services.languageUtils.toResolveHierarchy(lng);
    if (i18next.services.languageDetector) {
        i18next.services.languageDetector.cacheUserLanguage(req, res, lng);
    }
});
