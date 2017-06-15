var config = require("./config/webpack.dev.js");
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var compiler = webpack(config);
var path = require("path");
var server = new webpackDevServer(compiler, {
  hot: true,
  contentBase: path.join(__dirname, "public"),
  publicPath: "/assets",
  filename: "bundle.js"
  // compress: true,
});
server.listen(9000);
