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
      'tests/**/*.js',
    ],

    browsers: ['PhantomJS'],

    preprocessors: {
      'tests/**/*.js': ['babel', 'webpack']
    },

    webpack: require('./webpack.config.js'),

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      sourceFileName: function(file) {
        return file.originalPath;
      }
    },

    reporters: ['coverage', 'progress', 'spec'],

    coverageReporter: {
      instrumenters: {isparta: require('isparta')},
      instrumenter: {
        'src/js/**/*.js': 'isparta'
      },
      dir : 'coverage/',
      reporters: [{type: 'text'}, {type: 'html'}]
    }
  });
};
