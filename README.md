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
* [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) Impot Prefix 
* [with-react-i18next](https://github.com/zeit/next.js/blob/canary/examples/with-react-i18next/server.js) 多國語系


## 部屬環境

將 docker-compose.yml.sample 複製為 docker-compose.yml
根據需求更改 APP_ENV 來決定環境別（正式 production, 測試 sandbox, 開發 develop）

```
啟動 (加上 -d 可常駐背景執行)
$ docker-compose up

關閉
$ docker-compose down
```


## App Structure


```
.
├── src                                         # App source code
│   ├── components                              # 組件庫
│   │   ├── atoms                               # 元子 (最小的元件)
│   │   ├── molecules                           # 分子 (元子 + 元子)
│   │   ├── organisms                           # 組織 (分子 + 分子 or + 分子)
│   │   └── templates                           # 樣版
│   └── i18n                                    # 多國語系的使用方法
├── pages                                       # 頁面 (選擇使用那個樣版,並在裡面規劃組織+組織)
├── static                                      # 靜態資源路徑
│   ├── locales                                 # 多國語系設定檔案
│   │   └── en                                  # 英文
│   │       └── common.json                     # 通用字典檔
│   ├── favicon.ico                             # 網站圖標
│   └── robots.txt                              # Google SEO過濾設定
├── server.js                                   # Node 服務設定
├── .next.config.js                             # Next設定&Webpack設定檔
├── .babelrc                                    # Babel設定檔
├── .gitignore                                  # Git版控過濾項目設定檔
├── .gitlab-ci.yml                              # GITLAB-CI 持續整合測試設定檔
└── docker-compose.yml.sample                   # Docker Compose 部屬設定檔
```

### 路徑設定
 
 
#### next.js pages path

in next.config.js

```
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
 
PS: webpack.config.js by webstorm alias

 
#### root-static-files

把指定檔案放在網址根目錄 (SSL驗證 或 Google Analytics驗證 會需要放置檔案在根目錄下)
 
參考 https://github.com/zeit/next.js/tree/master/examples/root-static-files

in server.js


```
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


## How to use

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
git clone ssh://git@192.168.92.249:10022/yc-frontend/171228-ipay.git
```

Install it and run:

```bash
yarn
yarn dev 
```


## Other Example

[ANT Mobile Design](https://mobile.ant.design/) Ant UI Plugin

[with-antd-mobile](https://github.com/zeit/next.js/tree/canary/examples/with-antd-mobile) Ant UI Plugin By Mobile

[arc](https://github.com/diegohaz/arc) 參考原子設計

[Next.js + 各種套件組合系列](https://ithelp.ithome.com.tw/articles/10190581) 2018IT邦幫忙鐵人賽