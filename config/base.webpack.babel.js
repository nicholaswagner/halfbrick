const path = require("path");

const DotEnv = require("dotenv").config();
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const htmlRule = require("./rules/html");
const cssRule = require("./rules/css");
const scssRule = require("./rules/scss");
const fontsRule = require("./rules/fonts");
const imageRule = require("./rules/images");
const javascriptRule = require("./rules/javascript");

const entryPoint = path.resolve(__dirname, "../src/index.babel.js");
const output_options = {
  path: path.resolve(__dirname, "../themes/sca/dist"),
  filename: "[name].js"
};

const pathsToClean = ["dist"];
const cleanOpts = {
  root: path.resolve(__dirname, "../dist'"),
  exclude: [], //'sample.ext'
  verbose: true,
  dry: false
};

module.exports = {
  entry: entryPoint,
  output: output_options,
  module: {
    rules: [htmlRule, cssRule, scssRule, fontsRule, imageRule, javascriptRule]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOpts),
    new webpack.ProvidePlugin({
      // $: "jquery",
      // jQuery: "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
    // new HtmlWebpackPlugin({
    //   template: "./src/styleguide.html",
    //   filename: "styleguide.html"
    // })
  ]
};
