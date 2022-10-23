# pku-info

基于MIT课程项目catbook-react

`clone`到本地后在文件根目录下`npm install`安装react依赖库再运行start up部分的指令应该就能启动，并会产生`./node_modules`依赖库文件夹。

基本就是改的catbook-react，实现效果和上次pre的demo差不多，大致做了一下主页，大家可以看看下面文件结构部分的描述然后跟着改里面的内容，或者不清楚的话在群里面讨论。

## start up

run `npm start` in one terminal and `npm run hotloader` in another

visit `http://localhost:5000` for client

visit `http://localhost:3000` for server

## don't touch

the following files students do not need to edit. feel free to read them if you would like.

```
client/dist/index.html
client/src/index.js
client/src/utilities.js
server/validator.js
.babelrc
.npmrc
.prettierrc
package-lock.json
webpack.config.js
```

## 文件结构

### `./client`

客户端部分代码

#### `./client/src`

`./client/src/public` 包含图片资源

`./client/src/components` 包含前端网页源代码

### `./node_modules`

react的依赖库

### `./server`

后端服务器代码


## 客户端部分

`index.html`是网页的html，可以修改其中的head部分，body部分由react自动组织`./client/src/components`下的文件生成bundle.js来实现。要修改前端body，应该修改`./client/src/components`下的内容，以下叙述此目录下的文件、子目录。

`App.js`展示了网页html的基础内容，构架是将整个网页划分为导航栏/内容两部分，内容由Router包进行导航，来分别显示主页/组队页/登录页面等。这些内容页面实现在`./pages`中。

`./pages`中的每个网页又被划分为一定的模块，模块实现在`./modules`中。

## 服务器部分

`server.js`是服务器的主体代码，`api.js`是服务器接口代码。客户端`App.js`的Router将会根据`server.js`进行页面导航，`./modules`将调用`api.js`中的接口与服务器数据库进行通信。现在还没有数据库，数据均存放在服务器内存中。
