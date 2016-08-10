const
  testsContext = require.context('./src/', true, /^.+\.component.js$/),
  componentsContext = require.context('../src/js/', true, /^.+\.component.js$/);

// require all `test/components/**/index.js`
testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
componentsContext.keys().forEach(componentsContext);
