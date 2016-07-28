const
  testsContext = require.context('./src/', true, /(index|ss).js$/),
  componentsContext = require.context('../src/js/', true, /(index|ss).js$/);

// require all `test/components/**/index.js`
testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
componentsContext.keys().forEach(componentsContext);
