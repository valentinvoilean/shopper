'use strict';

// Karma configuration
// Generated on Fri Feb 19 2016 15:10:40 GMT-0500 (EST)

module.exports = function (config) {
  config.set({
    autoWatch: false,
    singleRun: true,

    frameworks: ['jspm', 'jasmine'],

    jspm: {
      loadFiles: ['src/js/**/*.spec.js'],
      serveFiles: ['src/js/**/*.js']
    },

    files: ['node_modules/babel-polyfill/dist/polyfill.js'],

    browsers: ['PhantomJS'],

    preprocessors: {
      'src/js/**/!(*.spec).js': ['babel', 'sourcemap', 'coverage']
    },

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
      dir : 'dist/coverage/',
      reporters: [{type: 'text'}, {type: 'html'}]
    }
  });
};
