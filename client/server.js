const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
})
.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
    return;
  }

  console.log('Listening at http://localhost:3000/'); // eslint-disable-line no-console
});
