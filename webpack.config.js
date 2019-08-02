const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || "development";

const config = {
  entry: "./src/index.js",
  mode: nodeEnv,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[folder]__[local]--[hash:base64:5]"
              }
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              fallback: "file-loader",
              limit: 16000 // 16kb
            }
          }
        ]
      }
    ]
  },
  devtool: nodeEnv === "development" ? "source-map" : "none",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
      favicon: path.join(__dirname, "public/favicon.ico"),
      inject: "body"
    })
  ],
  output: {
    path: path.join(__dirname, "/build"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css", ".scss"],
    alias: { root: path.resolve(__dirname, "./src/") }
  },
  devServer: {
    contentBase: "./build",
    historyApiFallback: true
  }
};

module.exports = config;
