const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'builds/dev'),
    // new contenthash will alert browser that js has changed so
    // it will not cache it.
    filename: 'js/[name].[contenthash].js',
    // clean the dev directory of old files
    clean: true,
    assetModuleFilename: 'img/[name][ext]',
  },
  // source-map is useful for debugging and seeing the source code in sources
  // this will generate a js.map/css.map source-map file in dev folder
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'builds/dev'),
    },
    port: 3080,
    // opens the webpage immediately on startup
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    // modifies index.html and keeps it current
    new HtmlWebpackPlugin({
      title: 'Estee Lauder Development Env',
      filename: 'index.html',
      template: 'client/template.html',
    }),
    // remove css from js bundle
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash].css',
    }),
  ],
});
