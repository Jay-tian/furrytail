const process = require('process');
const glob = require('glob');
const path = require('path');
const rootPath = process.cwd();

let purifyCssPaths = glob.sync(path.join(rootPath, '/server/view/**/*.twig'));
purifyCssPaths = purifyCssPaths.concat(glob.sync(path.join(rootPath, '/client/js/**/*.js')));

let setting = {
  entry: rootPath + '/client/js/',
  output: rootPath + '/public/furrytail/dist/',
  mainJs: rootPath + '/client/js/app.js',
  lessPath: rootPath + '/client/less/pages/',
  publicPath: '/furrytail/dist/',
  author: 'tianshengjie',
  purifyCssPaths: purifyCssPaths,
  assetName: 'webpack.assets.json',
  assetJs: false,
};

module.exports = setting;