var baseConfig = require("./webpack.base.config");
var webpack = require("webpack");
var webpackMerge = require("webpack-merge");

module.exports = webpackMerge(baseConfig, {
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            output: {
                comments: false
            }
        })
    ]
});