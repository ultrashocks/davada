// const webpack = require('webpack');
// const path = require('path');

module.exports = {
  // outputDir: path.resolve(__dirname, '../src/main/resources/static'),
  // indexPath: '../static/index.html',

  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
    },
  },

  devServer: {
    port: 8088,
    overlay: false,
    // https: true,
    /* proxy: {
      "/api": {
        target: process.env.VUE_APP_API_URL,
      },
    }, */
    //proxy: 'http://localhost:8080',
  },
  runtimeCompiler: true,
  // lintOnSave: false,
  // outputDir: '../src/main/webapp/site/',

  publicPath: '/',

  configureWebpack: {
    devtool: 'source-map',
  },
  /*  configureWebpack: config => {
    // devtool: 'source-map',
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
  }, */
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
  },
  css: {
    sourceMap: process.env.NODE_ENV === 'development',
  },
  productionSourceMap: true,
};
