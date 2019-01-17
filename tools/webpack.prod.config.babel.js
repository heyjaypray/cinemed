/* eslint-disable no-var, prefer-template, object-shorthand, func-names,
  import/no-extraneous-dependencies */
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var path = require('path');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var autoprefixer = require('autoprefixer');
var customProperties = require('postcss-custom-properties');
var postcssDiscardComments = require('postcss-discard-comments');

var config = require('../package.json');

var webpackPostcssTools = require('webpack-postcss-tools');

var tachyons  = webpackPostcssTools.makeVarMap('node_modules/tachyons/src/_colors.css');
var theme     = webpackPostcssTools.makeVarMap('client/styles/vars.css');

var vars = Object.assign({}, tachyons.vars, theme.vars);


// Plugin that extracts and keeps track of the real paths to the assets,
// saved within webpack-assets.json
// Reason is to have Wepback's require() like behaviour when requiring
// images etc. within Node when the static site is being rendered.
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(
  require('./isomorphic.prod.config.js')
);

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: ['./client/index.js'],
  },
  resolve: {
    root: [path.resolve(__dirname, '..','client')],
    modulesDirectories: [
      path.resolve(__dirname, '..', 'node_modules'),
      path.resolve(__dirname, '..', 'client'),
    ],
    extensions: ['', '.js','.css'],
    alias: {
      // config: path.resolve(__dirname, '..', 'client', 'config', 'config.js')
    },
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name]-[hash].js',
    libraryTarget: 'umd',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
      // 'config': 'config',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        NODE_BUILD_STATIC: false,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      screw_ie8: true,
      compressor: { warnings: false },
    }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('bundle-[contenthash].css', { allChunks: true }),
    webpackIsomorphicToolsPlugin,
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          [
            'css?sourceMap&minimize&modules&importLoaders=1&localIdentName=[local]',
            'postcss',
          ]
        ),
        include: /node_modules/,
      },
      {
        test: /vendor\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          [
            // 'css?minimize&modules&importLoaders=1&localIdentName=_[hash:base64:5]',
            'css?minimize&modules&importLoaders=1&localIdentName=[local]',
            'postcss',
          ]
        ),
        exclude: /node_modules/,
      },
      {
        // test: webpackIsomorphicToolsPlugin.regular_expression('css'),
        // test: /\.css$/,
        test: /^((?!vendor).)*\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          [
            'css?minimize&modules&importLoaders=1&localIdentName=_[hash:base64:5]',
            // 'css?minimize&modules&importLoaders=1&localIdentName=[local]',
            'postcss',
          ]
        ),
        exclude: /node_modules/,
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loaders: [
          'file?limit=65000&name=img/[sha512:hash:base64:7].[ext]',
          // 'image-webpack?optimizationLevel=7&progressive=true',
          'image-webpack',
        ],
      },
      // Font Definitions
      { test: /\.svg(\?.*)$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
      { test: /\.woff(\?.*)?$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.woff2(\?.*)?$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
      { test: /\.[ot]tf(\?.*)?$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
      { test: /\.eot(\?.*)?$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' }
    ],
  },

  imageWebpackLoader: {
    mozjpeg: {
      quality: 65,
    },
    pngquant: {
      quality: "65-90",
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          removeViewBox: false,
        },
        {
          removeEmptyAttrs: false,
        },
      ],
    },
  },

  postcss: function () {
    return [
      customProperties({ variables: vars }),
      require('postcss-salad')(config.salad),
      postcssDiscardComments({ removeAll: true }),
    ];
  },
};
