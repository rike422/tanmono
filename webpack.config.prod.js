const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: {
    index: 'index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: '[name]',
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  externals: {
    'react': 'React'
  },

  resolve: {
    extensions: ['', '.js', '.json', '.coffee', '.css', '.scss', '.jsx'],
    root: path.resolve(path.join(__dirname, 'src')),
  },

  postcss: [
    require('autoprefixer'),
    require('postcss-color-rebeccapurple')
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'postcss-loader',
          'sass'
        ),
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: __dirname
      },
      {
        test: /\.(png|gif|jp(e)?g)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(ttf|eot|svg|woff(2))(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=50000'
      },
    ]
  }
}
