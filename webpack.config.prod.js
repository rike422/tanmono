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
    new webpack.optimize.OccurrenceOrderPlugin(),
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
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
              'resolve-url-loader',
              'postcss-loader',
              'sass-loader'
            ]
          }
        ),
        exclude: /node_modules/,
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
