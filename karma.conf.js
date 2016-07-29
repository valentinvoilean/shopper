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
      'tests/index.js'
    ],

    browsers: ['PhantomJS'],

    preprocessors: {
      'tests/index.js': ['webpack']
    },

    webpack: require('./webpack.karma.config.js'),

    reporters: [ 'coverage', 'spec'],

    coverageReporter: {
      dir : 'coverage/',
      reporters: [{type: 'html'}]
    }
  });
};
