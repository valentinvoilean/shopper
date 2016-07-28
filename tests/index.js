// require all `test/components/**/index.js`
const testsContext = require.context('./components/', true, /index\.js$/);

testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
const componentsContext = require.context('../src/js/components', true, /index\.js$/);

componentsContext.keys().forEach(componentsContext);
