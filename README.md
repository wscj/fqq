本项目引用的一个`Node.js`的包[sqlite3](https://github.com/mapbox/node-sqlite3)在多数情况下很难安装成功，故添加该分支，把已经安装完成的文件上传。如果在`npm install`时因为`sqlite3`失败，可以在项目的`node_modules`目录下新建文件夹`sqlite3`，并把该分支的内容克隆进去，这样便是完成了`sqlite3`的安装，然后在执行一次`npm install`即可。

|系统版本|Node.js版本|
|--|--|
|MacOS|7.9.0|
