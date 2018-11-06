const path = require("path");

module.exports = {
  entry: {
    app: "./app.js"
  },
  output: {
    publicPath: __dirname + "/dist/",//__dirname指向被执行文件的绝对路径!!!
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};