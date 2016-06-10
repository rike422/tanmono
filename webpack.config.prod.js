const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    index: 'src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: '[name]',
    filename: '[name].js'
  },
  plugins: [
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
    require('autoprefixer-core'),
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
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'postcss-loader',
          'sass'
        ],
        include: __dirname
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: __dirname
      }
    ]
  }
}
