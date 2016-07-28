'use strict';

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
      'tests/index.js': 'webpack'
    },

    webpack: require('./webpack.config.js'),

    reporters: ['coverage', 'progress', 'spec'],

    coverageReporter: {
      dir : 'coverage/',
      reporters: [{type: 'html'}]
    }
  });
};
