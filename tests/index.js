// require all `test/components/**/index.js`
const testsContext = require.context('./src/', true, /.js$/);

testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
const componentsContext = require.context('../src/js/', true, /.js$/);

componentsContext.keys().forEach(componentsContext);
