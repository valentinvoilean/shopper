// Load Global Paths
require('./config/paths')(__dirname);

// Load Node Modules
const gulp = require('gulp'),
  runSequence = require('run-sequence'),
  plugins = require('gulp-load-plugins')({
    // DEBUG: true,
    pattern: ['gulp-*', 'sass-*', 'run-*']
  });

// Gulp Tasks

// SASS related Tasks
gulp.task('normalizeCSS', require(`${__gulpTasks}/normalizeCSS/normalizeCSS`)(gulp, plugins));
gulp.task('concatSass', require(`${__gulpTasks}/concatSass`)(gulp, plugins));
gulp.task('compileSass', ['normalizeCSS', 'concatSass']);

// Unit tests related tasks
gulp.task('test', require(`${__gulpTasks}/test`)());
gulp.task('test:debug', require(`${__gulpTasks}/test`)(true));

gulp.task('watch', require(`${__gulpTasks}/watch`)(gulp, plugins));
gulp.task('lint', require(`${__gulpTasks}/lint`)(gulp, plugins));
gulp.task('createBundle', require(`${__gulpTasks}/createBundle`)(gulp, plugins));

gulp.task('default', function() {
  runSequence('watch', ['compileSass', 'createBundle']);
});
