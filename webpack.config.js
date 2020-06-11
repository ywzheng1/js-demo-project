const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
  target: "web",
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(css|scss)$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      })
  ],
  mode: 'development'
};