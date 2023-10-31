const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.module
        .rule('videos')
        .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: '[name].[hash:8].[ext]'
          // Другие опции file-loader, если необходимо
        });
  }
})
