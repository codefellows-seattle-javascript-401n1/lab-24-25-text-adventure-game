'use strict';

const angular = require('angular');

angular.module('trippedApp').controller('GameController', [GameController]);
const Room = require('../model/room');

function GameController() {
  this.xp += 2;
  this.moveCount++;
  this.moveCount = 0;
  this.gameLog = [];
  this.prevLocation = [Room.roomB];
  this.player = {
    name: 'The Chosen',
    hp: 100,
    damage: 5,
    //Myst is magic
    myst: 0,
    xp: 0,
    currentLocation: Room.roomB
  };
}
