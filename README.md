# Teamup

###### 2022年秋季软件工程第一小组项目前端

## 项目介绍
本项目是一个以大学生**课程组队**为核心的组队交流平台，是一款网页类在线社交平台。该项目的主要思路是为有课程组队需求且有一定实现难度的用户提供一个可以即时发布组队信息和加入队伍的在线快捷平台。



## start up

`clone`到本地后在文件根目录下`npm install`安装react依赖库

run `npm start` in one terminal and `npm run hotloader` in another

visit `http://localhost:5000` for client

visit `http://localhost:3000` for server

## 文件结构

 `./client`　　　　　　　　　　客户端前端代码
- `src` 
  - `public` 　　　　　　　前端图片
  - `components` 　　　　　前端网页
    - `modules` 　　　　　前端组件代码
    - `pages` 　　　　　　前端界面
  
 `./node_modules` 　　　　　　　react的依赖库
## 前端部分

`index.html`是网页html，网页body由react自动组织`./client/src/components`下的文件生成bundle.js来实现。

`App.js`展示了网页html的基础内容，整体构架是将整个网页划分为导航栏/内容两部分，内容由Router包进行导航，来分别显示主页、组队界面、登录界面、注册界面等。这些内容页面实现在`./pages`中。

`./pages`中的每个网页又被划分为一定的模块，模块实现在`./modules`中。
