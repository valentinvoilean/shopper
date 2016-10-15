// This file configures the development web server
// which supports hot reloading and synchronized testing.

import webpack from 'webpack';
import config from '../webpack.config';
const compiler = webpack(config);

compiler.watch({ // watch options:
  aggregateTimeout: 300, // wait so long for more changes
  poll: true // use polling instead of native watchers
  // pass a number to set the polling interval
}, function (err, stats) {
  console.log(stats.toString({
    chunks: false, // Makes the build much quieter
    colors: true
  }));
});
