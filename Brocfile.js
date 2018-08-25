const Funnel = require('broccoli-funnel');
const BroccoliMergeTrees = require('broccoli-merge-trees');
const esTranspiler = require('broccoli-babel-transpiler');

// const HTMLTemplateTree = new Funnel('lib/html5-boilerplate');

const validatorsTree = new Funnel('src', {
  destDir: 'js',
});

module.exports = new BroccoliMergeTrees([
  // HTMLTemplateTree,
  validatorsTree
], {
  overwrite: true,
});
