module.exports = {
  test: /\.(html)$/,
  loader: "file-loader",
  exclude: /src\/index.html/,
  options: { name: "assets/[name].[ext]" }
};
