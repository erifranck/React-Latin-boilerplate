var path = require("path");

module.exports = {
  devtool: "eval",
  entry: path.resolve( __dirname, '../src/client.js' ),
  output: {
    path: path.resolve(__dirname, '../public/assets'),
    publicPath: path.resolve( __dirname, '../src' ),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [ 'node_modules' ],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "stage-0", "react"],
            plugins: ["transform-decorators-legacy"]
          }
        }]
      },
    ]
  }
};
