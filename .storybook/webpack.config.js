var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '../', 'src'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../', 'tmp'),
  },

  resolve: {
    extensions: ['', '.js', '.json', '.coffee', '.css', '.scss', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.scss/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'postcss-loader',
          'sass?sourceMap'
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
