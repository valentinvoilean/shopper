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
      `${__npm}/jquery/dist/jquery.min.js`,
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
          'js': __src.js,
          'jquery': `${__npm}/jquery/dist/jquery.min.js`, //don't import all the module; use only the minified version
          modernizr$: path.resolve(__dirname, '.modernizrrc')
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
        ],
        loaders: [
          {
            test: /\.modernizrrc$/,
            loader: "modernizr"
          }
        ]
      }
    },

    reporters: ['spec']
  });
};
