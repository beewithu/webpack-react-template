const common = require('./common.config');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    compress: true,
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
});
