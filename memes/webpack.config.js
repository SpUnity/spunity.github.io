const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
	  contentBase: path.join(__dirname),
	  compress: true,
	  port: 9000,
	  hot: true,
	  open: true,
	  overlay: true,
	  stats: 'errors-only',
	  publicPath: '/dist/',
	  watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
	}
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
  }),
  new webpack.HotModuleReplacementPlugin()/*,
   new HtmlWebpackPlugin ({
	   title: 'App',
	   filename: 'index.html'
   })*/
  ]
};
