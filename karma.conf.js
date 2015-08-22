// Karma configuration
// Generated on Sat Aug 22 2015 14:55:12 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
  basePath: './',
  frameworks: ['mocha'],
  files: [
    'src/**/*.js'
  ],
  exclude: [
  ],
  plugins: [
    'karma-babel-preprocessor',
    'karma-mocha',
    'karma-phantomjs-launcher'
  ],
  preprocessors: {
    'src/**/*.js': ['babel']
  },
  babelPreprocessor: {
    options: {
      sourceMap: 'inline'
    },
    filename: function (file) {
      return file.originalPath.replace(/\.js$/, '.es5.js');
    },
    sourceFileName: function (file) {
      return file.originalPath;
    }
  },
  reporters: ['progress'],
  port: 9876,
  colors: true,
  logLevel: config.LOG_INFO,
  autoWatch: true,
  browsers: ['PhantomJS'],
  singleRun: false
  });
};
