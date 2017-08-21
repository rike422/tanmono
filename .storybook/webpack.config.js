var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '../', 'src'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../', 'tmp'),
  },

  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.json', '.coffee', '.css', '.scss', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader?sourceMap',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            },
          },
          'resolve-url-loader',
          'sass-loader'
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(png|gif|jp(e)?g)$/,
        use: 'url-loader?limit=8192'
      },
      {
        test: /\.(ttf|eot|svg|woff(2))(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=50000'
      },
    ]
  }
}
