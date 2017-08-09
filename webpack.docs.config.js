const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const {resolve} = require('path');
const fs = require('fs');
const root_path = 'docs';
const public_path = '/docs/'; //根据实际情况修改, 即contentpath

// 写入环境变量
fs.open('./src/config/env.js', 'w', function (err, fd) {
  const buf = 'export default "production";';
  fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {});
});

//
module.exports = merge(webpackBaseConfig, {
  devtool: '#source-map',
  entry: {
    main: './src/docs/index',
    vendors: './src/docs/vendors'
  },
  output: {
    path: resolve(__dirname, root_path),
    publicPath: public_path,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    // 提取CSS
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    // 热部署
    new webpack.HotModuleReplacementPlugin(),
    // 提取第三方库
    /*new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.[hash].js'
    }),*/
    //
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // 压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // 构建html文件
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/docs/template/index.ejs',
      inject: false
    }),
  ]
});
