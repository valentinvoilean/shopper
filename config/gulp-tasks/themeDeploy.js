'use strict';

let dirs = require('../dirs'),
    apiConfig = require('../shopifyApiConfiguration');

module.exports = function (gulp, plugins) {
    return function () {
        plugins.watch(`${dirs.dest}/+(assets|layout|config|snippets|templates|locales)/**`)
            .pipe(plugins.shopifyUpload(apiConfig.key, apiConfig.password, apiConfig.siteName, apiConfig.themeID, {basePath: dirs.dest}));
    }
};