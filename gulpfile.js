'use strict';

let gulp = require('gulp'),
    watch = require('gulp-watch'),
    gss = require('gulp-shopify-sass'),
    gulpShopify = require('gulp-shopify-upload');

let dirs = require('./config/dirs'),
    apiConfig = require(`${dirs.config}/shopifyApiConfiguration`),
    paths = require(`${dirs.config}/paths`);

gulp.task('concatSass', function () {
    gulp.src(`${paths.sass.src}/*.*`)
        .pipe(gss())
        .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('Theme Deploy', function() {
    return watch(`${dirs.dest}/+(assets|layout|config|snippets|templates|locales)/**`)
        .pipe(gulpShopify(apiConfig.key, apiConfig.password, apiConfig.siteName, apiConfig.themeID, {basePath: dirs.dest}));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch(`${paths.sass.src}/**/*.*`, ['concatSass']);
});

gulp.task('default', ['watch', 'Theme Deploy']);