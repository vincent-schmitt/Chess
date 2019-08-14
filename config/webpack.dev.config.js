const path = require("path");

const RunNodeWebpackPlugin = require("run-node-webpack-plugin");
const WebpackShellPlugin = require("./plugins");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../", "src", "index.ts")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: path.resolve(__dirname, "tsconfig.dev.json")
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../", "dist")
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: [
        `node ${path.resolve(__dirname, "../", "dist", "dev.bundle.js")}`
      ]
    })
  ]
};
