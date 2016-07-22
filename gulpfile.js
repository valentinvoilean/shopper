// Load Global Paths
require('./config/paths')(__dirname);

// Load Node Modules
const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')();

// Gulp Tasks
gulp.task('concatSass', require(`${__gulpTasks}/concatSass`)(gulp, plugins));
gulp.task('themeDeploy', require(`${__gulpTasks}/themeDeploy`)(gulp, plugins));
gulp.task('watch', require(`${__gulpTasks}/watch`)(gulp));
gulp.task('lint', require(`${__gulpTasks}/lint`)(gulp, plugins));
gulp.task('createBundle', require(`${__gulpTasks}/createBundle`)(gulp, plugins));
gulp.task('default', ['watch', 'themeDeploy', 'lint', 'createBundle', 'concatSass']);
