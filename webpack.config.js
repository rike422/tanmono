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
    root: [path.resolve('src')],
  },

  postcss: [
    require('autoprefixer'),
    require('postcss-color-rebeccapurple')
  ],

  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components)/,
        include: [
          path.resolve('src'),
          path.resolve('test')
        ]
      }
    ],
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader',
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style?sourceMap',
          'resolve-url',
          'sass?sourceMap'
        ],
        include: __dirname
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        include: __dirname
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
