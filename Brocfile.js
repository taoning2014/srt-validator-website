const Funnel = require('broccoli-funnel');
const BroccoliMergeTrees = require('broccoli-merge-trees');
const esTranspiler = require('broccoli-babel-transpiler');
var webpackFilter = require('broccoli-webpack-cached');

const hTMLTemplateTree = new Funnel('lib/html5-boilerplate');

const validatorsTree = new Funnel('src', {
  destDir: 'js',
});

// const webpackedTree = webpackFilter(validatorsTree, {
//   entry: 'js/main.js',
//   output: {
//     // path: path.resolve(__dirname, 'srt-validator'),
//     filename: 'srt-validator.js',
//   },
// });

const esTranspiledTree = esTranspiler(validatorsTree, {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 2 versions'],
        },
      },
    ],
  ],
});

module.exports = new BroccoliMergeTrees([hTMLTemplateTree, esTranspiledTree], {
  overwrite: true,
});
