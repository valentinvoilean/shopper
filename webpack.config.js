import webpack from 'webpack';
import path from 'path';
import './paths';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

export default {
  //devtool: 'source-map',

  entry: {
    vendors: ['babel-polyfill', 'react', 'react-dom', 'react-match-media',
      'jquery', 'jquery.currencies.js', 'modernizr', 'picturefill'],
    utils: [`${__utils}/headerConfig.js`],
    main: [`${__base}/src/index.js`]
  },

  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test

  output: {
    path: __assets,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.svg'],
    alias: {
      'svg': __svg,
      'components': __components,
      'utils': __utils,
      'actions': __actions,
      'reducers': __reducers,
      'containers': __containers,
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
      {test: /\.js?$/, include: `${__base}/src`, loaders: ['eslint']}
    ],
    loaders: [
      {test: /\.js?$/, include: `${__base}/src`, loader: 'babel-loader'},
      {test: /\.svg$/, loader: 'svg-sprite'},
      {test: /\.modernizrrc$/, loader: 'modernizr'},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
};
