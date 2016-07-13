'use strict';

let gulp = require('gulp'),
    watch = require('gulp-watch'),
    plugins = require('gulp-load-plugins')();

let dirs = require('./config/dirs'),
    paths = require(`${dirs.config}/paths`);

// Gulp Tasks
gulp.task('concatSass', require(`${dirs.config}/gulp-tasks/concatSass`)(gulp, plugins));
gulp.task('themeDeploy', require(`${dirs.config}/gulp-tasks/themeDeploy`)(gulp, plugins));

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch(`${paths.sass.src}/**/*.*`, ['concatSass']);
});

gulp.task('default', ['watch', 'themeDeploy']);