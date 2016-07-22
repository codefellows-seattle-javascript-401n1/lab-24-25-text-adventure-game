'use strict';

//webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

//npm modules
const angular = require('angular');

//app modules
angular.module('monsterMash', []);

//angular module extensions
require('./controllers/game-controller.js');
