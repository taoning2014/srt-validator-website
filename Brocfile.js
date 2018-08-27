const Funnel = require('broccoli-funnel');
const BroccoliMergeTrees = require('broccoli-merge-trees');

const hTMLTemplateTree = new Funnel('lib/html5-boilerplate');

const validatorsTree = new Funnel('src', {
  destDir: 'js',
});

module.exports = new BroccoliMergeTrees([hTMLTemplateTree, validatorsTree], {
  overwrite: true,
});
