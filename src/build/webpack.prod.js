const { merge } = require('webpack-merge');
const baseConf = require('./webpack.common');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {distPath} =require('./path/index');
module.exports = merge(baseConf, {
    mode: 'production',
    output: {
        filename: '[name].min.js',
        path: distPath,
        library: 'simpleEditor',
        libraryTarget: 'umd',
        libraryExport: 'default',
    }
})
