module.exports = {
  test: /\.(png|jpe?g|gif|svg)$/,
  loader: "file-loader",
  options: { name: "images/[name].[ext]" }
};
