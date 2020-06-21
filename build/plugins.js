const webpack = require('webpack'),
  {resolve} = require('./utils'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: resolve('build/index.html'),
  })
];

module.exports = plugins