const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        // Setting css-scss for prod mode
        test: /\.(css|scss)$/,
        exclude: /\.module.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        // Setting SCSS-CSS modules! for prod mode
        test: /\.module\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
  },
  devtool: 'source-map',
};
