'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');
require('angular');
angular.module('gonzoApp', []);
require('./controller/gonzo-controller');
require('./controller/monster-controller');
