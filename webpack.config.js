const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: {
    main: './src/js/index.ts',
    // test: './test/test.js'
  },
  resolve: {
    alias: {
      '@': './src'
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    hot: true,
    port: 5000,
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /.txt/, use: 'raw-loader' },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}