// Load Global Paths
require('./src/config/paths')(__dirname);

// Load Node Modules
const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    DEBUG: true,
    pattern: ['gulp-*', 'sass-*']
  });

// Gulp Tasks

// SASS related Tasks

gulp.task('generateGrid', require(`${__gulpTasks}/generateGrid/generateGrid`)(gulp, plugins));
gulp.task('normalizeCSS', require(`${__gulpTasks}/normalizeCSS/normalizeCSS`)(gulp, plugins));
gulp.task('concatSass', require(`${__gulpTasks}/concatSass`)(gulp, plugins));
gulp.task('compileSass', ['generateGrid', 'normalizeCSS', 'concatSass']);

gulp.task('themeDeploy', require(`${__gulpTasks}/themeDeploy`)(gulp, plugins));
gulp.task('watch', require(`${__gulpTasks}/watch`)(gulp));
gulp.task('lint', require(`${__gulpTasks}/lint`)(gulp, plugins));
gulp.task('createBundle', require(`${__gulpTasks}/createBundle`)(gulp, plugins));
gulp.task('default', ['compileSass', 'watch', 'themeDeploy']);
