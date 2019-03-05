const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.(scss|sass)$/,
  use: [
    process.env.NODE_ENV !== "development"
      ? MiniCssExtractPlugin.loader
      : "style-loader",
    "css-loader",
    "sass-loader"
  ]
};
