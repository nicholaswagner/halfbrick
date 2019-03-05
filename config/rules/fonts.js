module.exports = {
  test: /\.(eot|ttf|woff|woff2|svg)(\?\S*)?$/,
  loader: "file-loader",
  exclude: /(src\/images)/,
  options: { name: "assets/[name].[ext]" }
};
