# iPay存款平台


## Features

* [JQuery 2.1.4](https://jquery.com/download/) JavaScript Library
* [ReactJS 16.2](https://reactjs.org/) JavaScript Framework
* [NextJs 4.2.1](https://github.com/zeit/next.js/) ReactJS with SSR Framework
* [Bootstrap 4.0.0-beta.2](http://bootstrap.hexschool.com/docs/4.0/components/popovers/) CSS Framework
* [Webpack](https://webpack.github.io/) Module bundler
* [custom-server-koa](https://github.com/zeit/next.js/tree/canary/examples/custom-server-koa) Expressive HTTP middleware framework for node.js
* [with-relay-modern](https://github.com/zeit/next.js/tree/master/examples/with-relay-modern) ENV dev Setting
* [with-styled-components](https://github.com/zeit/next.js/tree/master/examples/with-styled-components) CSS in JS
* [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) Impot Prefix 


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
│   ├─ components                               # 組件庫
│   │  ├── atoms                                # 元子 (最小的元件)
│   │  ├── molecules                            # 分子 (元子 + 元子)
│   │  ├── organisms                            # 組織 (分子 + 分子 or + 分子)
│   │  ├── template                             # 樣版
│   └─ pages                                    # 頁面 (選擇使用那個樣版,並在裡面規劃組織+組織)
├── server                                      # Node 服務設定
├── .next.config.js                             # Next設定&Webpack設定檔
├── .babelrc                                    # Babel設定檔
├── .gitignore                                  # Git版控過濾項目設定檔
├── .gitlab-ci.yml                              # GITLAB-CI 持續整合測試設定檔
└── docker-compose.yml.sample                   # Docker Compose 部屬設定檔
```

### Next.js Pages 路徑設定
 
 next.config.js
 
`const app = next({ dir: './src/components',dev })`


## How to use

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/master | tar -xz --strip=2 next.js-master/examples/custom-server-koa
cd custom-server-koa
```

Install it and run:

```bash
npm install
npm run dev
```

## Side note: Enabling gzip compression

The most common Koa middleware for handling the gzip compression is [compress](https://github.com/koajs/compress), but unfortunately it is currently not compatible with Next.  
`koa-compress` handles the compression of the response body by checking `res.body`, which will be empty in the case of the routes handled by Next (because Next sends and ends the response by itself). 

If you need to enable the gzip compression, the most simple way to do so is by wrapping the express-middleware [compression](https://github.com/expressjs/compression) with [koa-connect](https://github.com/vkurchatkin/koa-connect):  

```javascript
const compression = require('compression');
const koaConnect = require('koa-connect');


server.use(koaConnect(compression()));

```


## Other Example

[ANT Mobile Design](https://mobile.ant.design/) Ant UI Plugin

[with-antd-mobile](https://github.com/zeit/next.js/tree/canary/examples/with-antd-mobile) Ant UI Plugin By Mobile

[arc](https://github.com/diegohaz/arc) 參考原子設計