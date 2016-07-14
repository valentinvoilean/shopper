'use strict';

let paths = require(`${__config}/paths`)(),
    apiConfig = require(`${__config}/shopifyApiConfiguration`);

module.exports = function (gulp, plugins) {
    return function () {
        plugins.watch(`${__theme}/**`)
            .pipe(plugins.shopifyUpload(apiConfig.key, apiConfig.password, apiConfig.siteName, apiConfig.themeID, {basePath: __theme}));
    }
};