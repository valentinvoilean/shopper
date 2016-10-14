'use strict';

let apiConfig = require(`${__config}/shopifyApiConfiguration`);

module.exports = function (gulp, plugins) {
  plugins.watch(`${__theme}/**`, (file) => plugins.util.log(`Modified THEME file: ${file.path}`))
    .pipe(plugins.plumber())
    .pipe(plugins.shopifyUpload(apiConfig.key, apiConfig.password, apiConfig.siteName, apiConfig.themeID,
      {basePath: __theme})
    )
    .pipe(plugins.plumber.stop());

  plugins.watch(`${__src.sass}/**/*.*`, (file) => {
    plugins.util.log(`Modified SASS file: ${file.path}`);
    plugins.runSequence('concatSass');
  });

  plugins.shell('npm run watchJS');
};
