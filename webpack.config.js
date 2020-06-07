const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let config = {}

export function generateConfig(name) {
  let uglify = name.indexOf('min') > -1;
  let config = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: {
      main: './src/lib/index.ts',
      // test: './test/test.js'
    },
    resolve: {
      alias: {
        '@': './src'
      },
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: name + '.js',
      sourceMapFilename: name + '.map',
      library: 'zen-tools',
      libraryTarget: 'umd'
    }
  }
  config.devServer = {
    hot: true,
    port: 5000,
    contentBase: path.join(__dirname, 'dist')
  };
  config.module = {
    rules: [{
        test: /.txt/,
        use: 'raw-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ];
  config.performance = {
    // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
    hints: "warning",
    // 开发环境设置较大防止警告
    // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
    maxEntrypointSize: 5000000,
    // 最大单个资源体积，默认250000 (bytes)
    maxAssetSize: 3000000
  }

  if (uglify) {
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          include: /\/src/,
          exclude: /\/node_modules/,
        }),
      ],
    }
  }

  return config;
}

config = generateConfig('zen-tools');

module.exports = config;