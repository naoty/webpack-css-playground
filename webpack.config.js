const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/stylesheets/index.sass",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist", "javascripts")
  },
  resolve: {
    extensions: ["css", "sass", "scss"]
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/i,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                alias: {
                  "../fonts": "font-awesome/fonts"
                }
              }
            },
            "sass-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../stylesheets/bundle.css")
  ]
};
