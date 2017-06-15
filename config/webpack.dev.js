var path = require("path");
var DashboardPlugin = require('webpack-dashboard/plugin');
var webpack = require('webpack');

module.exports = {
  devtool: "eval",
  entry: path.resolve(__dirname, '../src/client.js'),
  output: {
    path: path.resolve(__dirname, '../public/assets'),
    publicPath: path.resolve(__dirname, '../src'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: ['node_modules'],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "stage-0", "react"],
            plugins: ["transform-decorators-legacy"]
          }
        }]
      },
      {
        test: /\.scss$/,
        exclude: ['node_modules'],
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader", // translates CSS into CommonJS
          options: {sourceMap: true}
        }, {
          loader: "sass-loader", // compiles Sass to CSS
          options: {sourceMap: true}
        }]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin({
      port: 3001
    })
  ]
};
