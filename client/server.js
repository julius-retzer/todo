const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
})
.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
    return;
  }

  console.log('Client running at http://localhost:3000/'); // eslint-disable-line no-console
});
