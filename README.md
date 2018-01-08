# iPay存款平台


## Features

* [JQuery 2.1.4](https://jquery.com/download/) JavaScript Library
* [ReactJS 16.2](https://reactjs.org/) JavaScript Framework
* [NextJs 4.2.1](https://github.com/zeit/next.js/) ReactJS with SSR Framework
* [Bootstrap 4.0.0-beta.2](http://bootstrap.hexschool.com/docs/4.0/components/popovers/) CSS Framework
* [Webpack](https://webpack.github.io/) Module bundler
* [express](https://github.com/zeit/next.js/tree/canary/examples/custom-server-express) Web 應用程式 Express 是最小又靈活的 Node.js Web 應用程式架構，為 Web 與行動式應用程式提供一組健全的特性
* [with-relay-modern](https://github.com/zeit/next.js/tree/master/examples/with-relay-modern) ENV dev Setting
* [with-styled-components](https://github.com/zeit/next.js/tree/master/examples/with-styled-components) CSS in JS
* [with-absolute-imports](https://github.com/zeit/next.js/tree/canary/examples/with-absolute-imports) Import Prefix 
* [with-react-i18next](https://github.com/zeit/next.js/blob/canary/examples/with-react-i18next/server.js) 多國語系
* [with-loading](https://github.com/zeit/next.js/tree/canary/examples/with-loading) 頁面讀取條 nprogress
* [eslint-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) ESLINT


## How to use

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
git clone ssh://git@192.168.92.249:10022/yc-frontend/171228-ipay.git
```

Install it and run:

```bash
yarn or 部屬只安裝生產依賴(yarn install --production)
yarn dev 
```


## 部屬環境

將 docker-compose.yml.sample 複製為 docker-compose.yml
根據需求更改 APP_ENV 來決定環境別（正式 production, 測試 sandbox, 開發 develop）

- 啟動 (加上 -d 可常駐背景執行)

```bash
$ docker-compose up
```

- 關閉

```bash
$ docker-compose down
```

- 查詢已啟動狀態

```bash
$ docker-compose logs -f
```

## App Structure


```
.
├── pages                                       # 頁面 (選擇使用那個樣版,並在裡面規劃組織+組織)
├── src                                         # App source code
│   ├── components                              # 組件庫
│   │   ├── atoms                               # 元子 (最小的元件)
│   │   ├── molecules                           # 分子 (元子 + 元子)
│   │   ├── organisms                           # 組織 (分子 + 分子 or + 分子)
│   │   └── templates                           # 樣版
│   ├── server.js                               # Node 服務設定
│   └── i18next                                 # 多國語系的使用方法
├── static                                      # 靜態資源路徑
│   ├── locales                                 # 多國語系設定檔案
│   │   └── en                                  # 英文
│   │       └── common.json                     # 通用字典檔
│   ├── favicon.ico                             # 網站圖標
│   └── robots.txt                              # Google SEO忽略設定檔
├── .babelrc                                    # Babel設定檔
├── .env.sandbox                                # Sandbox站環境設定範本
├── .eslintignore                               # Eslint忽略設定檔
├── .eslintrc                                   # Eslint規則設定檔
├── .gitignore                                  # Git版控忽濾項目設定檔
├── jest.config.js                              # Jest測試設定檔
├── .next.config.js                             # Next設定&Webpack設定檔
├── package.json                                # 依賴套件設定
├── postcss.config.js                           # CSS預處理設定
├── webpack.config.js                           # Webpack-Webstorm路徑別名設定
├── .gitlab-ci.yml                              # Gitlab-CI 持續整合測試設定檔
└── docker-compose.yml.sample                   # Docker Compose 部屬設定檔
```



## Package List

- [x] glob
- [x] prop-types
- [x] autoprefixer (postcss-cssnext已包含可考慮刪除不安裝)
- [x] husky

- 處理JS物件套件
- [x] immutable

- JS函示庫
- [x] jquery

- 程式碼品質檢測套件
- [x] eslint - 程式碼品質工具
- [x] eslint-config-airbnb - 程式碼品質工具
- [x] eslint-config-airbnb-base - 程式碼品質工具
- [x] eslint-plugin-import - 程式碼品質工具
- [x] eslint-plugin-jest - 程式碼品質工具
- [x] eslint-plugin-jsx-a11y
- [x] eslint-plugin-react

- 測試套件
- [x] jest

- CSS轉譯套件
- [x] raw-loader
- [x] sass-loader
- [x] postcss-easy-import
- [x] postcss-loader
- [x] node-sass
- [x] styled-component
- [x] classnames (className標籤轉換)

- CSS-MODULE 加裝
- [x] postcss-cssnext
- [x] postcss-modules
- [x] skeleton-loader

- 多國語系套件
- [x] react-i18next
- [x] i18next
- [x] i18next-browser-languagedetector
- [x] i18next-express-middleware
- [x] i18next-node-fs-backend
- [x] i18next-xhr-backend

- 網頁進度讀取條
- [x] nprogress

- CSS各瀏覽器統一初始化
- [x] normalize.css

- BABEL轉譯套件
- [x] babel-plugin-module-resolver
- [x] babel-plugin-styled-components
- [x] babel-polyfill
- [x] babel-preset-es2015
- [x] babel-preset-es2017
- [x] babel-preset-stage-0
- [x] babel-register

- Cookie套件
- [x] js-cookie
- [x] cookie-parser

- 環境參數引入.env套件
- [x] dotenv
- [x] dotenv-webpack

- 後端服務套件
- [x] express

- 讓前後端可共用程式碼的套件
- [x] isomorphic-fetch

- 上線前壓縮用
- [x] cssnano

- 刪除檔案使用
- [x] trash


## 路徑設定
 
 
#### next.js pages path

in next.config.js

```javascript
const app = next({ dir: './',dev })
```

#### import alias

可以省去相對路徑 ../../ 的麻煩

in .babelrc

| alias name | real path                  |
| ---------- | -------------------------- |
| @atoms     | src/components/atoms       |
| @templates | src/components/templates   |
| @molecules | src/components/molecules   |
| @organisms | src/components/organisms   |
| @i18next   | src/i18next                |
 
PS: webpack.config.js by webstorm alias

 
#### root-static-files

把指定檔案放在網址根目錄 (SSL驗證 或 Google Analytics驗證 會需要放置檔案在根目錄下)
 
參考 https://github.com/zeit/next.js/tree/master/examples/root-static-files

in server.js


```javascript
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
```

## i18n多國語系設定

- words add in static/locales/{語系}/字典檔
- debug mode 開啟設定至 .env 新增 I18N_DEBUG=true (default:false)
- 開發模式會將頁面上使用到的語系但字典檔未建立時, 會自動加入到 static/locales/{語系}/*.missing.json
- How to change language in code:

```javascript
import { translate } from 'react-i18next'
import i18n from '@i18n'


function Home ({ t,i18n }) {
    return (
        <Page>
            <div>
                {t('welcome')}
            </div>
        </Page>
    )
}

const Extended = translate(['common'], { i18n, wait: process.browser })(Home)

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
Extended.getInitialProps = async ({ req }) => {
    if (req && !process.browser) return i18n.getInitialProps(req, ['common'])
    return {}
}

export default Extended

```

- How to change language in query string
```
get http://localhost?lang=zh-cn
```

- Configuration options

  https://www.i18next.com/configuration-options.html
  
  language codes to lookup, given set language is 'en-US':
  
```
  load: 
    'all' --> ['en-US', 'en', 'dev'], 
    'currentOnly' --> 'en-US', 
    'languageOnly' --> 'en'
```


## CSS Styles Mode

- Scss 設定全域的項目, 例如 Bootstrap 設定
- Styled-components 用於設計元件


## CSS Module BEM

使用skeleton-loader,之後會產生scss.json,再用trash刪除產生的json

BEN格式 [path][name]__[local]--[hash:base64:5]

```scss
.title{
  color: red;
}
```

```javascript
import Head from 'next/head';
import {stylesheet, styles} from './index.scss'

return (
    <div>
        <Head>
            <style dangerouslySetInnerHTML={{__html: stylesheet}} />
        </Head>
        <p className={styles.title}>MY TITLE</p>
    </div>
)
    
```


## Other Reference

- [ANT Mobile Design](https://mobile.ant.design/) Ant UI Plugin
- [with-antd-mobile](https://github.com/zeit/next.js/tree/canary/examples/with-antd-mobile) Ant UI Plugin By Mobile
- [arc](https://github.com/diegohaz/arc) 參考原子設計
- [Next.js + 各種套件組合系列](https://ithelp.ithome.com.tw/articles/10190581) 2018IT邦幫忙鐵人賽
- [使用 react-i18next 建立多語系](http://jason-wang.logdown.com/posts/771654)
- [I18N Support](https://github.com/erikras/react-redux-universal-hot-example/issues/624)
- [head-elements](https://github.com/zeit/next.js/tree/canary/examples/head-elements) page內修改HEAD內容
- [with-data-prefetch](https://github.com/zeit/next.js/tree/canary/examples/with-data-prefetch) API非同步取資料
- [nextjs-seed](https://github.com/mcmakler/nextjs-seed) 參考ESLINT與IMPORT SCSS Build


## Remarks

- next.config.js的webpack設定路徑產生找不到css loader modules問題,故將 next pages 路徑移動回根目錄,避免導入Package異常
  若更改專案根路徑, 需要修改 src/server.js 的i18next static路徑, 
- 在 babelrc 加上 env設定會產生 styled-components 的問題

```
"env": {
    "development": {
      "presets": "next/babel"
    },
    "production": {
      "presets": "next/babel"
    },
    "test": {
      "presets": [
        ["env", { "modules": "commonjs" }],
        "next/babel"
      ]
    }
  }
```
