const { merge } = require('webpack-merge');
const baseConf = require('./webpack.common');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {distPath} =require('./path/index');
module.exports = merge(baseConf, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: distPath,
        library: 'simpleEditor',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    devtool: 'eval-source-map',
    plugins: [new HtmlWebpackPlugin({
        title:'测试',
        filename:"index.html",
        template:'/server/page.ejs',
    }),]
})
