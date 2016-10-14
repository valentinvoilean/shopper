require('./config/paths')(__dirname);

const
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: {
    vendors: ['babel-polyfill', 'react', 'react-dom', 'react-match-media',
      'jquery', 'jquery.currencies.js', 'modernizr', 'picturefill'],
    main: [`${__src.js}/main.jsx`]
  },

  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test

  output: {
    path: __assets,
    filename: 'main.bundle.js'
  },

  devServer: {
    contentBase: __src.js
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
    new webpack.NoErrorsPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
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
    new webpack.optimize.UglifyJsPlugin({
     compress:{
     warnings: false
     }
     })
  ],

  eslint: {
    failOnError: false
  },

  module: {
    noParse: [
      `${__npm}/jquery`
    ],
    preLoaders: [
      { test: /\.jsx?$/, loaders: ['eslint'], exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.svg$/, loader: 'svg-sprite' },
      { test: /\.modernizrrc$/, loader: 'modernizr' }
    ]
  }
};
