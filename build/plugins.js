const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  {resolve} = require('./utils'),
  {zenPlugins} = require('./config');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: resolve('build/index.html'),
  })
];

module.exports = plugins.concat(zenPlugins ? zenPlugins : []);