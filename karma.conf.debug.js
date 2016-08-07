'use strict';

require('./config/paths')(__dirname);
const path = require('path');

// Karma configuration
// Generated on Fri Feb 19 2016 15:10:40 GMT-0500 (EST)

module.exports = function (config) {
  config.set({
    autoWatch: true,
    singleRun: false,

    frameworks: ['jasmine'],

    files: [
      'tests/index.js'
    ],

    browsers: ['Chrome'],

    preprocessors: {
      'tests/index.js': ['webpack']
    },

    webpack: {
      devtool: 'inline-source-map',

      resolve: {
        extensions: ['', '.js'],
        alias: {
          'svg': __src.svg,
          'common': `${__src.js}/common`,
          'components': `${__src.js}/components`,
          'config': `${__src.js}/config`,
          'base': `${__src.js}/base`
        }
      },

      module: {
        preLoaders: [
          // transpile all files except testing sources with babel as usual
          {
            test: /\.js$/,
            exclude: [
              path.resolve(__npm)
            ],
            loader: 'babel'
          }
        ]
      }
    },

    reporters: ['spec']
  });
};
