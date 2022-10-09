const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack(config) {
    config.devtool = false;
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          globalVars: {
            hack: `true; @import "~@/styles/css/global.less";`,
          },
          modifyVars: {
            hack: `true; @import "~@/styles/css/reset.less";`,
          },
        },
      },
    },
  },
  devServer: {
    // disableHostCheck: true,
    compress: true,
    // Use 'ws' instead of 'sockjs-node' on server since webpackHotDevClient is using native websocket
    // transportMode: "ws",
    // logLevel: "silent",
    // clientLogLevel: "none",
    hot: false,
    liveReload: false,
  }
});
