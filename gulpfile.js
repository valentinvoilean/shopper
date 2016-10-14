// Load Global Paths
require('./config/paths')(__dirname);

// Load Node Modules
const gulp = require('gulp'),
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

gulp.task('watch:JS', require(`${__gulpTasks}/watchJS`)(gulp, plugins));
gulp.task('watch:CSS', require(`${__gulpTasks}/watchCSS`)(gulp, plugins));
gulp.task('watch:Theme', require(`${__gulpTasks}/watchTheme`)(gulp, plugins));
gulp.task('watch', ['watch:Theme', 'watch:CSS', 'watch:JS']);

gulp.task('lint', require(`${__gulpTasks}/lint`)(gulp, plugins));
gulp.task('createBundle', require(`${__gulpTasks}/createBundle`)(gulp, plugins));

gulp.task('default', ['watch', 'createBundle', 'compileSass']);
