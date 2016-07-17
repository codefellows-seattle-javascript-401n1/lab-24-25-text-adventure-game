'use strict';

const angular = require('angular');

angular.module('trippedApp').controller('GameController', [GameController]);

function GameController() {
  this.xp += 2;
  this.moveCount++;
  this.moveCount = 0;
  this.gameLog = [];
  this.prevLocation = [''];
  this.player = {
    name: 'The Chosen',
    hp: 100,
    damage: 5,
    xp: 0,
    currentLocation: 'roomOne',
  };
}
