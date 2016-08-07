const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  // all options optional

  // display no info to console (only warnings and errors)
  noInfo: false,

  // display nothing to the console
  quiet: false,

  // switch into lazy mode
  // that means no watching, but recompilation on every request
  lazy: true,

  // watch options (only lazy: false)
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },

  // public path to bind the middleware to
  // use the same as in webpack
  publicPath: "/assets/",

  // custom headers
  headers: { "X-Custom-Header": "yes" },

  // options for formating the statistics
  stats: {
    colors: true
  }
}));

app.use(express.static('./public'));

app.listen(3000, function() {
  console.log('Listening on 3000');
});