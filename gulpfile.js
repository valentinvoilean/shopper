'use strict';

// Load Global Paths
require('./config/paths')(__dirname);

// Load Node Modules
let gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

// Gulp Tasks
gulp.task('concatSass', require(`${__gulpTasks}/concatSass`)(gulp, plugins));
gulp.task('themeDeploy', require(`${__gulpTasks}/themeDeploy`)(gulp, plugins));
gulp.task('watch', require(`${__gulpTasks}/watch`)(gulp));
gulp.task('default', ['watch', 'themeDeploy']);