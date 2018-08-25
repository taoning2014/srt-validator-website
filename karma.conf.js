const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    frameworks: ['qunit'],
    plugins: ['karma-qunit', 'karma-chrome-launcher', 'karma-webpack'],
    browsers: ['Chrome'],
    files: [
      'tests/tests.webpack.js',
      {
        pattern: 'tests/**/*.spec.js',
        included: false,
        served: false,
        watched: true
      },
      { pattern: 'src/**/*.js', type: 'module' },
    ],

    preprocessors: {
      'tests/tests.webpack.js': ['webpack']
    },
    webpack: Object.assign(webpackConfig, {
      entry: undefined,
      output: undefined
    }),

    singleRun: true,
  });
};
