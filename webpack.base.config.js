const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//
let webpackConfig = {
  // 加载器
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: 'vue-style-loader!css-loader!less-loader',
            scss: 'vue-style-loader!css-loader!sass-loader',
            css: 'style-loader!css-loader?minimize!less-loader!sass-loader!postcss-loader?sourceMap',
          },
          postcss: [require('postcss-px2rem')({remUnit: 100})]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader?minimize!postcss-loader?sourceMap',
        // 'autoprefixer-loader',
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(html|tpl)$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        loader: 'url-loader?limit=8192',
        exclude: /favicon\.png$/,
      },
      {
        test: /favicon\.png$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      },
    ]
  },
  resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extensions: ['.js', '.vue'],
    // 别名，可以直接使用别名来代表设定的路径以及其他
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '~': resolve(__dirname, 'src'),
    }
  },
};

module.exports = webpackConfig;
