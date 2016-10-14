'use strict';

module.exports = function (gulp, plugins) {
    return () =>
        gulp.src(`${__src.js}/main.jsx`)
            .pipe(plugins.webpack(require(`${__base}/webpack.config.js`)))
            .pipe(plugins.rename(function (path) {
                path.extname = path.extname == '.js' ? '.js.liquid': path.extname;
            }))
            .pipe(gulp.dest(__assets));
};
