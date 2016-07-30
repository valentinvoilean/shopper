require('./config/paths')(__dirname);

const path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'components': `${__src.js}/components`,
      'config': `${__src.js}/config`,
      'base': `${__src.js}/base`
    }
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
