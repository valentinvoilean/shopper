'use strict';

module.exports = function (gulp) {
    return function () {
        gulp.watch(`${__src.sass}/**/*.scss.liquid`, ['concatSass']);
    }
};