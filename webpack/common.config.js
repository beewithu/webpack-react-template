const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const aliases = require('./aliases');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: isProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].bundle.js',
    publicPath: '/',
    chunkFilename: 'js/[name].chunk.js',
    assetModuleFilename: 'static/[hash][ext][query]',
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: aliases,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, '../node_modules/'),
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: path.resolve(__dirname, '../node_modules/'),
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|webp)$/,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 10000 } },
      },
    ],
  },
};
