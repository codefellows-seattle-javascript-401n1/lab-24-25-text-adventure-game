'use strict';

const angular = require('angular');
const Monster = require('../model/monster.js');

angular.module('demoApp').controller('gameController', [GameController]);

function GameController(){
  this.history = ['Welcome'];
  this.moveCount = 0;
  this.map = require('../model/map');

  this.player = {
    name: 'Ash-Ron',
    hp: 100,
    damage: 10,
    xp:0,
    location: 'roomA'
  };

  this.gameForm = {
    direction: 'north'
  };

  this.room = {
    name: this.player.location
  };
}

GameController.prototype.moveDirection = function(direction){
  this.moveCount++;
  var oldLocation = this.player.location;
  var newLocation = this.map[oldLocation][direction];
  if (newLocation && newLocation !== 'wall'){

    this.updateLocation(newLocation);
    return;
  }
  this.holdLocation();
};


GameController.prototype.updateLocation = function(location){
  this.player.location = location;
  this.room.name = location;

  if (Math.random() < this.map[location].monsterChance){
    this.room.monster = new Monster();
    this.player.hp -= this.room.monster.damage;
    this.logTurn(`is now in ${this.player.location}. a ${this.room.monster.name} attacked. you lost ${this.room.monster.damage}`);
    return;
  }

  this.room.monster = null;
  this.logTurn(`is now in ${this.player.location}, the room is empty`);

};

GameController.prototype.holdLocation = function(){
  this.logTurn('hit a wall.');
};

GameController.prototype.logTurn = function(message){
  this.history.push(`TURN ${this.moveCount}: ${this.player.name} ${message}`);
};

GameController.prototype.attackMonster = function(){
  this.moveCount++;
  if (this.room.monster){
    var message = '';
    if (Math.random() > 0.5 ) {
      this.player.hp -= this.room.monster.damage;
      message += `the monster hurt you!, you lost ${this.room.monster.damage}.`;
    }
  }
  this.room.monster.hp -= this.player.damage;
  if (this.room.monster.hp < 0){
    this.player.xp += 100;
    this.player.hp += 10;
    this.logTurn(`you killed the ${this.room.monster.name} and gained 100 xp and 10 hp`);
    this.room.monster = null;
    return;
  }
  this.logTurn(message + ' you attacked the monster');
};
