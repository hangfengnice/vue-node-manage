# vue-node-manage

## 项目启动

```javascript
git clone git@github.com:hangfengnice/vue-node-manage.git

npm i  // 安装服务端依赖包

// 此时需要开启本地mongodb

npm run dev // 启动项目的同时 安装客户端的依赖包 需要一点时间
```

## 服务端部分 node-express-mongodb-mongoose

## 前后端连载

- concurrently

```javascript
client package.json //客户端
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "start": "npm run serve"
  }

vue-node-manage package.json // 服务端
"scripts": {
    "client-install": "npm install --prefix client",  // 客户端
    "client": "npm start --prefix client",            // 客户端
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "server": "nodemon server.js",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  }
```
