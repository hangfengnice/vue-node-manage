const path = require('path')

const resolve = dir => path.join(__dirname,dir)


const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'


module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
    .set('@',resolve('src'))
    .set("_c",resolve('src/components'))

  },
  productionSourceMap: false,
  devServer: {
    open: true,
    host:"localhost",

    proxy:{
      '/api':{
        target:"http://localhost:5000/api/",
        ws:true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }

      }
  }

}