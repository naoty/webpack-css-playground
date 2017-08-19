const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/stylesheets/index.sass",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist", "javascripts")
  },
  resolve: {
    extensions: ["css", "sass"]
  },
  module: {
    rules: [
      {
        test: /\.sass$/i,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../stylesheets/bundle.css")
  ]
};
