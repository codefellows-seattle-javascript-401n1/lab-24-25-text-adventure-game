'use strict';

const angular = require('angular');

angular.module('adventureGame').controller('GameController', [GameController]);

function GameController() {
  this.history = ['GOOD LUCK IN THE SPACE STATION -- ALL SYSTEMS DOWN.'];
  this.player = {
    name: 'Reptar',
    hp: 1000,
    damage: 5,
    xp: 0,
    location: 'moduleA1'
  };

  this.gameForm = {
    direction: 'forward'
  };

  this.stationModule = {
    name: this.player.location
  };

  this.moveCount = 1;
}
