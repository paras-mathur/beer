const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'bundle.js': [
      path.resolve(__dirname, 'jquery-3.3.1.min.js'),
      path.resolve(__dirname, 'preload.js')
    ]
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist'),
  }
};