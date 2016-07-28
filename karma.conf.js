'use strict';

require('./config/paths')(__dirname);
const path = require('path');

// Karma configuration
// Generated on Fri Feb 19 2016 15:10:40 GMT-0500 (EST)

module.exports = function (config) {
  config.set({
    autoWatch: false,
    singleRun: true,

    frameworks: ['jasmine'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'tests/index.js'
    ],

    browsers: ['PhantomJS'],

    preprocessors: {
      'tests/index.js': ['webpack']
    },

    webpack: {
      resolve: {
        extensions: ['', '.js'],
        alias: {
          'components': `${__src.js}/components/`,
          'config': `${__src.js}/config/`,
          'base': `${__src.js}/base/`
        }
      },

      isparta: {
        embedSource: false,
        noAutoWrap: true
        // these babel options will be passed only to isparta and not to babel-loader
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
          },
          // transpile and instrument only testing sources with isparta
          {
            test: /\.js$/,
            include: path.resolve(__src.js),
            loader: 'isparta'
          }
        ]
      }
    },

    reporters: [ 'coverage', 'spec' ],

    coverageReporter: {
      dir : 'coverage/',
      reporters: [{type: 'html'}]
    }
  });
};
