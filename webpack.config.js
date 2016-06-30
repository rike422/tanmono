const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'postcss-loader',
          'sass?sourceMap'
        ],
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
