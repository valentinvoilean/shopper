'use strict';

let gulp = require('gulp'),
    shell = require('gulp-shell'),
    gss = require('gulp-shopify-sass');


let dirs = {
    src: 'src',
    dest: 'dest'
};

let sassPaths = {
    src: `${dirs.src}/sass`,
    dest: `${dirs.dest}/assets`
};

gulp.task('concatSass', function() {
    gulp.src(sassPaths.src + '/*.scss')
        .pipe(gss())
        .pipe(gulp.dest(sassPaths.dest));
});

gulp.task('Theme Deploy', shell.task([
    './themeWatch.sh'
]));

gulp.task('default', ['Theme Deploy']);