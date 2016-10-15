import webpack from 'webpack';
import path from 'path';
import './paths';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

export default {
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
    new webpack.DefinePlugin(GLOBALS),
    new webpack.NoErrorsPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
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
      {test: /\.jsx?$/, include: __src.js, loaders: ['eslint']}
    ],
    loaders: [
      {test: /\.jsx?$/, include: __src.js, loader: 'babel'},
      {test: /\.svg$/, loader: 'svg-sprite'},
      {test: /\.modernizrrc$/, loader: 'modernizr'}
    ]
  }
};
