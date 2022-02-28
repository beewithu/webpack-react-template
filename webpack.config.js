const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['react-hot-loader/patch', path.resolve(__dirname, './src/index.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/[name].bundle.js',
    publicPath: '/',
    chunkFilename: 'js/[name].chunk.js',
  },
  devServer: {
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      favicon: path.resolve(__dirname, './favicon.ico'),
    }),
  ],
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, './node_modules/'),
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};
