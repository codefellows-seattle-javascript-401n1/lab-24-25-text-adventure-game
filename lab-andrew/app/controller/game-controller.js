'use strict';

const angular = require('angular');

angular.module('trippedApp').controller('GameController', [GameController]);

function GameController() {
  this.player = {
    name: 'The Chosen',
    hp: 100,
    damage: 5,
    xp: 0,
    location: 'roomOne',
    //write prevLocation()
    prevLocation: 'roomOne'
  };
  this.player.location;
}
