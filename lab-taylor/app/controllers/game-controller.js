'use strict';

const angular = require('angular');

angular.module('adventureGame').controller('GameController', [GameController]);

function GameController() {
  this.history = ['GOOD LUCK IN THE SPACE STATION -- ALL SYSTEMS DOWN.'];

  this.map = require('../model/map');
  this.player = {
    name: 'Reptar',
    hp: 1000,
    damage: 5,
    xp: 0,
    location: 'moduleA1',
    items: []
  };

  this.gameForm = {
    direction: 'forward'
  };

  this.stationModule = {
    name: this.player.location
  };

  this.moveCount = 1;
}

GameController.prototype.moveDirection = function (direction) {
  this.moveCount++;
  const oldLocation = this.player.location;
  const newLocation = this.map[oldLocation][direction];

  if (newLocation && newLocation !== 'hull') {
    this.updateLocation(newLocation);
    return;
  }

  this.holdLocation();
  return;
};

GameController.prototype.updateLocation = function(location) {
  this.player.location = location;
  this.stationModule.name = location;

  if (Math.random() < this.map[location].monsterChance) {
    //monster stuffhere
  }

  if (Math.random() < this.map[location].itemChance) {
    //item stuff here
  }

  this.stationModule.monster = null;
  this.stationModule.item = null;
  this.updateHistory(`is now in ${this.player.location}.`);
};

GameController.prototype.holdLocation = function () {
  this.updateHistory('ran into the hull.');
};

GameController.prototype.updateHistory = function(message) {
  this.history.push(`MOVE ${this.moveCount}: ${this.player.name} ${message}`);
};
