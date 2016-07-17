'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
//var babel = require('babel-loader');
/**
 * when webpack is called, it will look for the webpack.config.js file.  If it is found, it will require this module, which exports an object that configs webpack.
 * the "entry" property is the start point for webpack
 * the output "filename" property specifies the filename that will be the output of webpack
 * the output "path" property specifies the directory where bundle.js will be saved
 */
module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        /**
         *sass-loader converts sass file to css file
         *css-loader converts css file to js object and loads into bundle
         *style-loader gets the js object in the bundle and coverts it and applies it to the DOM
         */
        loader: ExtractTextPlugin.extract('style', 'css!sass!')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [

    /**
     * This plugin supports the scss loader above.  Bundle.css is the output of this operation
     */
    new ExtractTextPlugin('bundle.css')
  ]
};
