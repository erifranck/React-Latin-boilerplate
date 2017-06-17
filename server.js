var config = require("./config/webpack.dev.js");
var express = require("express");
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpackDashboard = require("webpack-dashboard");
var webpackDashboardPlugin = require("webpack-dashboard/plugin");
var Dashboard = new webpackDashboard();
var compiler = webpack(config);
var path = require("path");
var app = express();
compiler.apply(new webpackDashboardPlugin( Dashboard.setData ));
app.use(express.static('public'));
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  contentBase: path.join(__dirname, "public"),
  publicPath: "/assets",
  filename: "bundle.js",
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: true,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: {
      green: '\u001b[32m',
    },
  },
}));
app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));
app.use((req, res) => {
  req.send("index.html")
});
app.listen(9000, console.log("listening on 3000"));
