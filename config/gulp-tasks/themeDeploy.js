'use strict';

let apiConfig = require(`${__config}/shopifyApiConfiguration`);

module.exports = function (gulp, plugins) {
  return () => plugins.watch(`${__dist}/**`)
    .pipe(
      plugins.shopifyUpload(apiConfig.key, apiConfig.password, apiConfig.siteName, apiConfig.themeID,
        {basePath: __dist})
    );
};
