'use strict';

const angular = require('angular');
const Monster = require('../model/monster');

angular.module('hauntedHouse').controller('GameController', [GameController]);

function GameController() {
  this.history = ['WELCOME to the ~haunted~ studio apartment!!'];
  this.moveCount = 0;
  this.map = require('../model/map');

  this.player = {
    name: 'john doe, tho',
    hp: 100,
    xp: 0,
    location: 'foyer'
  };

  this.gameForm = {
    direction: 'north'
  };
}

GameController.prototype.moveDirection = function(direction) {
  this.moveCount++;
  var oldLocation = this.player.location;
  var newLocation = this.map[oldLocation][direction]; // will be whatever room the player's selected direction will go to
  if (newLocation && newLocation !== 'wall') {
    this.updateLocation(newLocation);
    return;
  }

  this.holdLocation(); // keeps you where you are if wall is hit
};

GameController.prototype.updateLocation = function(location) {
  this.player.location = location;
  this.room.name = location;
  if (Math.random() < this.map[location].monsterChance) {
    this.room.monster = new Monster();
    this.player.hp -= this.room.monster.damage;
    this.logTurn(`is now in ${this.player.location}. A ${this.room.monster.name} attacked! You lost ${this.room.monster.damage}.`);
    return;
  }

  this.room.monster = null;
  this.logTurn(`is now in ${this.player.location}. The room is empty.`);
};

GameController.prototype.holdLocation = function () {
  this.logTurn('hit a wall.');
};

GameController.prototype.logTurn = function(message){
  this.history.push(`TURN ${this.moveCount}: ${this.player.name} ${message}`);
};
