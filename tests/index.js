const
  testsContext = require.context('./src/', true, /(index|app).js$/),
  componentsContext = require.context('../src/js/', true, /(index|app).js$/);

// require all `test/components/**/index.js`
testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
componentsContext.keys().forEach(componentsContext);
