// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const pkg = require('./package.json');

const stylesHandler = "style-loader";

const config = {
  entry: "./dist/tsc/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist/tsc"),
    filename: 'built-js-'+pkg.version
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = config;
