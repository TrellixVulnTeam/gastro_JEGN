const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [
              { from: "src/images", to: "images" },
              //{ from: "other", to: "public" },
            ],
          }),
    ],
    module: {
        rules: [
                {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                },
                {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                 type: 'asset/resource',
                 
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: 'asset/inline',
                },
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
              
                
        ]
    },
    mode: 'development',
    devServer: {
    historyApiFallback: true,
    static: './dist',
    open: true, compress: true, hot: true, port: 8080,
  },   
}
       
