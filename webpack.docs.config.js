//--------------------------------------------------------------------------

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const {resolve} = require('path');
const fs = require('fs');
const root_path = 'docs/demo';
const public_path = '/view/demo/'; //根据实际情况修改, 即contentpath, 以'/'结尾

//--------------------------------------------------------------------------

// Banner
var pkg = require('./package.json');
var moment = require('moment');
var banner = 'view demo \nversion: ' + pkg.version + ' \nrepo: https://github.com/zview/view \nbuild: ' + moment().format('YYYY-MM-DD HH:mm:ss');

//--------------------------------------------------------------------------

//
fs.open('./src/demo/config/env.js', 'w', function (err, fd) {
    const buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {
    });
});

//--------------------------------------------------------------------------

module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    entry: {
        main: './src/demo/index',
        vendors: './src/demo/vendors'
    },
    output: {
        path: resolve(__dirname, root_path),
        publicPath: public_path,
        filename: '[name].min.js',  //.[hash]
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
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
                }),
            }
        ]
    },
    plugins: [
        // 提取CSS
        new ExtractTextPlugin({
            filename: '[name].min.css',
            allChunks: true
        }),
        // 版权信息
        new webpack.BannerPlugin({
            banner: banner,
            entryOnly: true
        }),
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
            template: './src/demo/template/index.ejs',
            inject: false
        }),
    ]
});

//--------------------------------------------------------------------------
