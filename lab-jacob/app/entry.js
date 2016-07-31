'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');

// angular extensions
angular.module('tindur', []);
require('./controller/game-controller.js');
