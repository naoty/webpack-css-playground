const path = require("path");

module.exports = {
  entry: ["./src/stylesheets/layout.css"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist", "javascripts")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["css"]
  }
};
