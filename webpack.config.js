require('./config/paths')(__dirname);

const
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    vendors: ['babel-polyfill', 'jquery', 'jquery.currencies.js', 'modernizr', 'picturefill'],
    main: [`${__src.js}/main.js`]
  },

  output: {
    path: __assets,
    filename: 'main.bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.svg'],
    alias: {
      'svg': __src.svg,
      'js': __src.js,
      'jquery': `${__npm}/jquery/dist/jquery.min.js`, //don't import all the module; use only the minified version
      modernizr$: path.resolve(__dirname, '.modernizrrc')
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],

  module: {
    noParse: [
      `${__npm}/jquery`
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
    ],
    loaders: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite',
      },
      {
        test: /\.modernizrrc$/,
        loader: "modernizr"
      }
    ]
  }
};
