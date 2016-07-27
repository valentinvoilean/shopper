require('./config/paths')(__dirname);

module.exports = {
  devtool: 'source-map',

  entry: `${__src.js}/main.js`,

  output: {
    path: __assets,
    filename: 'main.bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'components': `${__src.js}/components/`,
      'config': `${__src.js}/config/`,
      'base': `${__src.js}/base/`
    }
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
