const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/index.js'],
  },

  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'build'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    hot: true,
    port: 9000,
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          variable: 'data',
          interpolate: '\\{\\{(.+?)\\}\\}',
          evaluate: '\\[\\[(.+?)\\]\\]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html',
      inject: 'body',
    }),
  ],
};
