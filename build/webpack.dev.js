const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

const path = require('path')
const webpack = require('webpack')

const devConfig = {
  devServer: { // 开发时才用到，生产环境不需要
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    hot: true,
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  devtool: 'cheap-module-source-map'
}

module.exports = merge(baseConfig, devConfig)