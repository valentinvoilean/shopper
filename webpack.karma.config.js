require('./config/paths')(__dirname);

const path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'components': `${__src.js}/components/`,
      'config': `${__src.js}/config/`,
      'base': `${__src.js}/base/`
    }
  },

  isparta: {
    embedSource: false,
    noAutoWrap: true
    // these babel options will be passed only to isparta and not to babel-loader
  },

  module: {
    preLoaders: [
      // transpile all files except testing sources with babel as usual
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__npm)
        ],
        loader: 'babel'
      },
      // transpile and instrument only testing sources with isparta
      {
        test: /\.js$/,
        include: path.resolve(__src.js),
        loader: 'isparta'
      }
    ]
  }
};
