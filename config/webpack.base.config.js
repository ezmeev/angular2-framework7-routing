var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: [
        "./src/vendor.ts",
        './src/main.ts'
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: "dist"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CopyWebpackPlugin([
            {from: 'node_modules/framework7/dist/css/framework7.css', to: 'lib/framework7.css'},
            {from: 'node_modules/framework7/dist/css/framework7.ios.min.css', to: 'lib/framework7.ios.min.css'},
            {from: 'node_modules/framework7/dist/css/framework7.ios.colors.min.css', to: 'lib/framework7.ios.colors.min.css'},
            {from: 'node_modules/framework7/dist/js/framework7.min.js', to: 'lib/framework7.min.js'},
            {from: 'node_modules/framework7/dist/js/framework7.js', to: 'lib/framework7.js'},
        ])
    ]
};