require('./config/paths')(__dirname);

const
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    vendors: ['babel-polyfill', 'jquery', 'enquire.js'],
    main: ['babel-polyfill', `${__src.js}/main.js`]
  },

  output: {
    path: __assets,
    filename: 'main.bundle.js'
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'components': `${__src.js}/components`,
      'config': `${__src.js}/config`,
      'base': `${__src.js}/base`,
      'jquery': `${__npm}/jquery/dist/jquery.min.js`, //don't import all the module; use only the minified version
      'enquire.js': `${__npm}/enquire.js/dist/enquire.min.js`
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity)
  ],

  module: {
    noParse: [
      `${__npm}/jquery`,
      `${__npm}/enquire.js/`
    ],
    preLoaders: [
      // transpile all files except testing sources with babel as usual
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__npm),
          path.resolve(__config),
          path.resolve(__theme),
          path.resolve(__tests),
          path.resolve('./coverage')
        ],
        loader: 'babel'
      }
    ]
  }
};
