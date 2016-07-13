"use strict";

let gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('Theme Deploy', shell.task([
    './themeWatch.sh'
]));

gulp.task('default', ['Theme Deploy']);