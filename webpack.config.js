require('./config/paths')(__dirname);
const path = require('path');

module.exports = {
  entry: `${__src.js}/main.js`,

  output: {
    path: __assets,
    filename: 'main.bundle.js'
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'components': `${__src.js}/components/`,
      'config': `${__src.js}/config/`,
      'base': `${__src.js}/base/`
    }
  },

  babel: {
    presets: ['es2015']
  },

  isparta: {
    embedSource: false,
    noAutoWrap: true,
    // these babel options will be passed only to isparta and not to babel-loader
    babel: {
      presets: ['es2015']
    }
  },

  module: {
    preLoaders: [
      // transpile all files except testing sources with babel as usual
      {
        test: /\.js$/,
        exclude: [
          path.resolve('src/js/'),
          path.resolve('node_modules/')
        ],
        loader: 'babel'
      },
      // transpile and instrument only testing sources with isparta
      {
        test: /\.js$/,
        include: path.resolve('src/js/'),
        loader: 'isparta'
      }
    ]
  }
};
