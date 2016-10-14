'use strict';

module.exports = function (gulp, plugins) {
    return () =>
        gulp.src(`${__dirname}/*.scss`)
            .pipe(plugins.sass({
                outputStyle: 'compressed',
                errLogToConsole: true,
                includePaths: require('node-normalize-scss').includePaths
            }))
            .pipe(plugins.rename(function (path) {
                path.dirname += '/components/core';
                path.basename = '_normalize';
                path.extname = '.scss';
            }))
            .pipe(gulp.dest(__src.sass));
};
