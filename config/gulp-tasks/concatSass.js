'use strict';

module.exports = function (gulp, plugins) {
    return () =>
        gulp.src(`${__src.sass}/*.scss`)
            .pipe(plugins.shopifySass())
            .pipe(plugins.rename(function (path) {
                path.basename = path.basename.split('.cat')[0];
                path.extname = '.scss.liquid';
            }))
            .pipe(gulp.dest(__assets));
};
