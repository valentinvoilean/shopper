require('./config/paths')(__dirname);

const
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    vendors: ['babel-polyfill', 'react', 'react-dom', 'jquery', 'jquery.currencies.js', 'modernizr', 'picturefill'],
    main: [`${__src.js}/main.jsx`]
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
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    /*new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })*/
  ],

  eslint: {
    failOnError: false
  },

  module: {
    noParse: [
      `${__npm}/jquery`
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: __src.js
      }
    ],
    loaders: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite'
      },
      {
        test: /\.modernizrrc$/,
        loader: 'modernizr'
      },
      {
        test: /\.jsx?$/,
        include : __src.js,
        loader: 'babel'
      }
    ]
  }
};
