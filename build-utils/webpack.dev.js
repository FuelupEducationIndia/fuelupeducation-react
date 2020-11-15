const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        // Setting css-scss for dev mode
        test: /\.(css|scss)$/,
        exclude: /\.module.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        // Setting SCSS-CSS modules! for dev mode
        test: /\.module\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    hot: true,
    port: 3000,
  },
  devtool: 'eval-source-map',
};
