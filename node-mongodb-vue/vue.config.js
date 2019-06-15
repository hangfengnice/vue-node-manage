const path = require('path')
module.exports={

  chainWebpack: config => {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('@', resolve('src'))
    config.output.filename('[name].js?[hash]').end()
  }
// 对应的.vue文件中

}