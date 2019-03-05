const merge = require("webpack-merge");

module.exports = merge(require("./base.webpack.babel.js"), {
  mode: "production"

  // We'll place webpack configuration for production environment here
});
