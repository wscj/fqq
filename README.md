# fqq

`fqq`是仿QQ的意思，创建这个项目主要是为了熟悉`Vue.js`，也顺便学习了`Express.js`。虽然整体操作起来功能不多，但挺多细节是有做处理的，花费的时间也不少，毕竟前后台都自己实现。

## 技术点

* 前端
	* Vue.js
	* vue-resource
	* vuex
	* vue-router
* 后端
	* Node.js
	* Express.js
* 数据库
	* Sqlite

## 功能点
1. 登录（登录成功后服务器生成token传给前台，前台每个请求都带上token，后台每次都会做检验）
1. 展示历史会话列表
1. 会话功能（可以聊天，发送和接收的信息将被保存到数据库）
1. 展示好友列表
1. 展示个人资料

## 安装与运行

``` bash
# 安装依赖
npm install

# 运行，请手动在浏览器打开localhost:3000
npm run dev

# 打包成静态文件
npm run build
```
