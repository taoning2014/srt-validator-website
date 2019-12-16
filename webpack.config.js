const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.bundle.js',
  },
  resolve: {
    alias: {
      'srt-validator': path.resolve(
        __dirname,
        'node_modules/srt-validator/src/srtValidator.js'
      ),
      codemirror: path.resolve(__dirname, 'node_modules/codemirror/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader/url', 'file-loader'],
      },
    ],
  },
};
