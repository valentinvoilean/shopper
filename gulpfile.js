// Load Global Paths
require('./config/paths')(__dirname);

// Load Node Modules
const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    // DEBUG: true,
    pattern: ['gulp-*', 'sass-*', 'run-*']
  });

// Gulp Tasks

// Unit tests related tasks
gulp.task('test', require(`${__gulpTasks}/test`)());
gulp.task('test:debug', require(`${__gulpTasks}/test`)(true));

gulp.task('default', ['test']);
