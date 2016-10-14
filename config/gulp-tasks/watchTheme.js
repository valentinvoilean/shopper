'use strict';

const apiConfig = require(`${__config}/shopifyApiConfiguration`);

module.exports = function (gulp, plugins) {
    return () =>
        plugins.watch(`${__theme}/**`, (file) =>
            plugins.util.log(`Modified THEME file: ${file.path}`))
            .pipe(plugins.shopifyUpload(apiConfig.key, apiConfig.password, apiConfig.siteName, apiConfig.themeID,
                {basePath: __theme})
            );
};
