/* eslint-disable no-var, prefer-template, object-shorthand, func-names,
  import/no-extraneous-dependencies */
// var R = require("ramda");
var webpack = require("webpack");
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
// var autoprefixer = require("autoprefixer");
var customProperties = require("postcss-custom-properties");

// var rebassConfig = require("../client/utils/config.js").default;
var config = require("../package.json");

var webpackPostcssTools = require("webpack-postcss-tools");

var tachyons = webpackPostcssTools.makeVarMap("node_modules/tachyons/src/_colors.css");
var theme = webpackPostcssTools.makeVarMap("client/styles/vars.css");

var vars = Object.assign({}, tachyons.vars, theme.vars);

// console.log("config",config.salad);
// console.log("config map", vars );

module.exports = {
  devtool: "eval-source-map",
  entry: {
    bundle: [
      "webpack-hot-middleware/client?path=/__webpack_hmr",
      "./client/index.js",
    ],
  },
  resolve: {
    root: [path.resolve(__dirname, "..", "client")],
    modulesDirectories: [
      path.resolve(__dirname, "..", "node_modules"),
      path.resolve(__dirname, "..", "client")
    ],
    alias: {
      // config: path.resolve(__dirname, "..", "client", "config", "index.js"),
    },
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].js",
    publicPath: "/",
  },
  eslint: {
    configFile: config.eslintConfig,
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      // "config": "config",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_BUILD_STATIC: false,
      },
    }),
  ],
  // node: {
  //   net: "empty",
  //   tls: "empty",
  //   dns: "empty"
  // },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
      {
        test: /\.md$/,
        loaders: ["html-loader", "markdown-loader"],
      },
      {
        test: /\.css$/,
        // test: /^((?!vendor).)*\.css$/,
        loaders: [
          "style?sourceMap",
          // "css?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]",
          "css?modules&importLoaders=1&localIdentName=[local]",
          "postcss",
        ],
        include: /node_modules/,
      },
      {
        // test: /\.css$/,
        test: /vendor\.css$/,
        loaders: [
          "style?sourceMap",
          // "css?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]",
          "css?modules&importLoaders=1&localIdentName=[local]",
          "postcss",
        ],
        exclude: /node_modules/,
      },
      {
        // Global main css import
        test: /^((?!vendor).)*\.css$/,
        loaders: [
          "style?sourceMap",
          // "css?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]",
          "css?modules&importLoaders=1&localIdentName=[local]",
          "postcss",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        loaders: [
          "file?name=[path][name].[ext]",
        ],
      },

      // Font Definitions
      { test: /\.svg(\?.*)$/, loader: "url?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]" },
      { test: /\.woff(\?.*)?$/, loader: "url?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]" },
      { test: /\.woff2(\?.*)?$/, loader: "url?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]" },
      { test: /\.[ot]tf(\?.*)?$/, loader: "url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]" },
      { test: /\.eot(\?.*)?$/, loader: "url?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]" }
    ],
  },
  postcss: function () {
    return [
      customProperties({ variables: vars }),
      require("postcss-salad")(config.salad),
      // atImport,
      // precss,
      // rucksack,
      // functions({ functions: { rem: rem } }),
    ];
  },
};
