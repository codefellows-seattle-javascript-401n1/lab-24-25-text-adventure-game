'use strict';

//npm modules
const angular = require('angular');

//app modules
const Monster = require('../model/monster.js');



angular.module('politiksApp').controller('GameController', [GameController]);

//object constructor to represent the model//
function GameController() {
  this.history =  ['Welcome to the POLITIKS'];
  this.moveCount = 0;
  this.map = require('../model/map');

  this.player = {
    name: 'responsible voter',
    hp: 1000,
    damage: 10,
    xp: 0,
    location: 'roomA'
  };

  this.gameForm = {
    direction: 'north'
  };

  this.room = {
    name: this.player.location
  };
}

GameController.prototype.moveDirection = function(direction) {
  this.movecount++;
  var oldLocation = this.player.location;
  var newLocation = this.map[oldLocation][direction];
  if (newLocation && newLocation !== 'wall') {
    //character moving into the location//
    this.updateLocation(newLocation);
    return;
  }
    //character stay where you are//
  this.holdLocation();
};

GameController.prototype.updateLocation = function(location) {
  this.player.location = location;
  this.room.name = location;
  if(Math.random() < this.map[location].monsterChance) {
    this.room.monster = new Monster();
    this.player.hp -= this.room.monster.damage;
    this.logTurn(`is now in ${this.player.location}. a ${this.room.monster.name} attacked. you lost ${this.room.monster.damage}`);
    return;
  }

  this.room.monster = null;
  this.logTurn(`is now in ${this.player.location}, the room is empty `);
};

GameController.prototype.holdLocation = function () {
  this.logTurn('hit a wall.');
};

GameController.prototype.logTurn = function(message) {
  this.history.push(`TURN ${this.moveCount}: ${this.player.name} ${message}`);
};

GameController.prototype.attackMonster = function () {
  console.log('attack monster');
  this.moveCount++;
  if(this.room.monster) {
    var message = '';
    if(Math.random () > 0.5) {
      this.player.hp -= this.room.monster.damage;
      message += `Trump just hurt you!, you lost ${this.room.monster.damage}.`;
    }
    this.room.monster.hp -= this.player.damage;
    if(this.room.monster.hp < 0) {
      this.player.xp += 1000;
      this.logTurn(`defeated ${this.room.monster.name}, made merica whole again, and gained 300 xp`);
      this.room.monster = null;
      return;
    }
    this.logTurn(message + ' attacked using common sense, honesty, and itegrity');
  }
};
