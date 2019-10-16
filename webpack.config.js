const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV === 'development';
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
    plugins: [
      // new CleanWebpackPlugin(['./public']),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: true
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }]
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      open: true
    }
  };
  module.exports = config;

  if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
      new OptimizeCSSAssets() // call the css optimizer (minification)
    );
  }