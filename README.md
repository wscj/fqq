### 项目简介

* `fqq`是仿QQ的意思
* 创建这个项目主要是为了熟悉`Vue.js`，也顺便学习了`Express.js`
* 本项目前端部分打包成静态文件后，可结合[另一个项目](https://github.com/tadashi-chen/fqq-backend)测试生产模式
* 本项目仅用于学习，但不限于只与`Vue.js`相关的技术，后续学到新的东西如果适合该项目，则会加进来，强化本项目的综合性
* 部分技术是半路引入项目的，可能没有运用于整个项目，只是少部分地方用到，如引入`sass`后只把部分`css`改成`sass`，部分`rem`改为`px2rem`方法

### 技术点

* 前端
	* Vue.js
	* vue-resource
	* vuex
	* vue-router
	* sass
	* es6
* 后端
	* Node.js
	* Express.js
* 数据库
	* Sqlite

### 其他说明
* 当前没有注册功能，请使用帐号6661、6662、……、6666登录，其中6666初始化数据最完整，建议使用，密码统一为123，

### 安装与运行

``` bash
# 安装依赖
npm i

# 运行，请手动在浏览器打开localhost:3000
npm run dev

# 打包成静态文件
npm run build

# 调试模式，方便后台开发
npm run debug
```