'use strict';

let paths = require(`${__config}/paths`)();

module.exports = function (gulp, plugins) {
    return function () {
        gulp.src(`${paths.sass.src}/*.*`)
            .pipe(plugins.shopifySass())
            .pipe(gulp.dest(paths.sass.dest));
    };
};
