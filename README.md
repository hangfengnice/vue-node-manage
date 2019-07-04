# vue-node-manage

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
