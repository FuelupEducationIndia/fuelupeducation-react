const Dotenv = require('dotenv-webpack')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        // Setting css-scss and css/scss-modules
        test: /\.(css|scss)$/,
        exclude: /node_modules/,

        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                compileType: 'module',
                mode: 'local',
                auto: true,
                exportGlobals: true,
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
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
    host: '0.0.0.0',
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, '..', 'src/assets/'),
      pages: path.resolve(__dirname, '..', 'src/pages/'),
      components: path.resolve(__dirname, '..', 'src/components/'),
      sass: path.resolve(__dirname, '..', 'src/assets/styles/sass/'),
    },
  },
  devtool: 'eval-source-map',
}
