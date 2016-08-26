'use strict';

let apiConfig = require(`${__config}/shopifyApiConfiguration`);

module.exports = function (gulp, plugins) {
  plugins.watch(`${__theme}/**`)
    .pipe(plugins.shopifyUpload(apiConfig.key, apiConfig.password, apiConfig.siteName, apiConfig.themeID,
      {basePath: __theme})
    );

  plugins.watch(`${__src.sass}/**/*.*`, function () {
    plugins.runSequence('concatSass');
  });

  plugins.watch(`${__src.js}/**/*.*`, function () {
    plugins.runSequence(['lint', 'createBundle']);
  });

  plugins.watch(`${__tests}/**/*.*`, function () {
    plugins.runSequence('lint');
  });
};
