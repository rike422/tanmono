const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  externals: {
    'react': 'React'
  },

  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.json', '.coffee', '.css', '.scss', '.jsx'],
    modules: [
      path.resolve(__dirname, "src"),
      'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components)/,
        enforce: 'pre',
        include: [
          path.resolve('src'),
          path.resolve('test')
        ]
      },
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
          'style-loader?sourceMap',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'resolve-url-loader',
          'sass-loader?sourceMap'
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
