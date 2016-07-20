'use strict';

let babelMoreOptions = { presets: 'es2015' };

// Karma configuration
// Generated on Fri Feb 19 2016 15:10:40 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // karma-babel-preprocessor settings
    // tell it to use babel-preset-es2015
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS'
    ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // Settings for the karma-coverage reporter
    coverageReporter: {
      instrumenters: { isparta : require('isparta') },
      instrumenter: {
        'src/js/**/*.js': 'isparta'
      },
      instrumenterOptions: {
        isparta: { babel : babelMoreOptions }
      },
      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'html',
          dir: 'coverage/'
        }
      ]
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jspm',
      'jasmine'
    ],

    jspm: {
      // Edit this to your needs
      config: 'config.js',
      packages: 'jspm_packages/',
      loadFiles: [
        'src/js/**/*.spec.js'
      ],
      serveFiles: [
        'src/js/**/*.js'
      ]
    },

    // web server port
    port: 9876,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/js/{*.js,!jspm_packages{,/**}}': ['babel'],
      'src/js/**/!(*.spec).js': ['babel', 'coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'coverage',
      'spec'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
