const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    "./src/stylesheets/layout.css",
    "./src/stylesheets/main.css"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist", "javascripts")
  },
  resolve: {
    extensions: ["css"]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          use: ["css-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../stylesheets/bundle.css")
  ]
};
