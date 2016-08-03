'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

let imgFile = require('./image/pacMan.png');
console.log(imgFile);

const angular = require('angular');
angular.module('gameApp', []);

require('./controller/game-controller.js');
