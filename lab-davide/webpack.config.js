'use strict';

const ExtractText = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },

  plugins: [
    new ExtractText('bundle.css'),
    new CleanPlugin('build')
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass!')
      },

      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devServer: {
    devtool:      'eval-source-map',
    contentBase:   `${__dirname}/build`
  }
};
