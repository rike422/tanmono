var webpackConfig = require('./webpack.config');
var webpack = {
  module: webpackConfig.module,
  resolve: webpackConfig.resolve
}

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    frameworks: ['mocha'],

    files: [
      'test/**/*_spec.jsx'
    ],

    exclude: [],

    preprocessors: {
      'test/**/*_spec.jsx': ['webpack'],
      'src/**/*.jsx': ['webpack']
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],

    reporters: ['progress'],

    // web server port
    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    webpack: webpack,

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }
  })
  ;
};
