'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');
// npm modules
const angular = require('angular');
// app modules
// module constants

angular.module('demoApp', []);
// module logic
require('./controller/game-controller.js');
