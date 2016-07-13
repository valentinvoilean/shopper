'use strict';

let paths = require('./config/paths')(__dirname),
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    plugins = require('gulp-load-plugins')();

// Gulp Tasks
gulp.task('concatSass', require(`${paths.tasks}/concatSass`)(gulp, plugins));
gulp.task('themeDeploy', require(`${paths.tasks}/themeDeploy`)(gulp, plugins));

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch(`${paths.sass.src}/**/*.scss.liquid`, ['concatSass']);
});

gulp.task('default', ['watch', 'themeDeploy']);