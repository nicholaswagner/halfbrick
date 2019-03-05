const merge = require("webpack-merge");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
module.exports = merge(require("./base.webpack.babel.js"), {
  mode: "development",
  watch: true,
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0"
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: "3000",
        proxy: "http://wordpress.local",
        files: ["src/**/**/*.*"]
      },
      {
        //other settings that can be useful
        reload: true,
        injectCss: true,
        stream: true
      }
    )
  ]
});
