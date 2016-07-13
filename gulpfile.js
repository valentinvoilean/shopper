'use strict';

let gulp = require('gulp'),
    shell = require('gulp-shell'),
    gss = require('gulp-shopify-sass');


const dirs = {
    src: 'src',
    dest: 'dest'
};

const sassPaths = {
    src: `${dirs.src}/sass`,
    dest: `${dirs.dest}/assets`
};

gulp.task('concatSass', function () {
    gulp.src(`${sassPaths.src}/*.scss`)
        .pipe(gss())
        .pipe(gulp.dest(sassPaths.dest));
});

gulp.task('Theme Deploy', shell.task([
    './themeWatch.sh'
]));

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch(`${sassPaths.src}/**/*.*`, ['concatSass']);
});

gulp.task('default', ['watch', 'Theme Deploy']);