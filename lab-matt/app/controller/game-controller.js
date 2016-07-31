'use strict';

const angular = require('angular');


const Monster = require('../model/monster');


angular.module('adventureApp').controller('GameController', [GameController]);

function GameController(){
  this.history = ['Welcome to Space Jail.  Your cell recently malfunctioned and open.  Try to escape!'];
  this.moveCount = 0;
  this.map = require('../model/map');

  this.player = {
    name: 'Space Ash',
    spaceSuit: 100,
    location: 'roomA',
    damage: 10,
    xp: 0
  };

  this.gameForm = {
    direction: 'North'
  };

  this.room = {
    name: this.player.location
  };
}

GameController.prototype.warnings = function(){
  if(this.player.spaceSuit <= 50 && this.player.spaceSuit > 25){
    this.history.push('WARNING: YOUR SPACE SUIT IS BELOW 50%');
  }
  if(this.player.spaceSuit <= 25){
    this.history.push('WARNING: YOUR SPACE SUIT IS BELOW 25%');
  }
};

GameController.prototype.moveDirection = function(direction){
  this.moveCount++;
  var oldLocation = this.player.location;
  var newLocation = this.map[oldLocation][direction];
  if(newLocation && newLocation !== 'wall'){
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
    console.log(this.room.monster);
    this.player.spaceSuit -= this.room.monster.monsterDamage;
    this.warnings();
    this.logTurn(`is now in ${this.player.location}. A ${this.room.monster.monsterName} attacked.  You lost ${this.room.monster.monsterDamage} armor from your space suit`);
    return;
  }
  this.room.monster = null;
  this.logTurn(`is now in ${this.player.location}, the room is empty`);
};

GameController.prototype.holdLocation = function(){
  this.logTurn('hit a wall and your space suit took 5 points of damage.');
  this.player.spaceSuit -= 5;
  this.warnings();
};

GameController.prototype.logTurn = function(message){
  if(this.history.length > 10){
    this.history.splice(0, 8);
    console.log('shit don got spliced');
  }
  this.history.push(`TURN ${this.moveCount}: ${this.player.name} ${message}`);
};


GameController.prototype.attackMonster = function(){
  this.moveCount++;
  if(this.room.monster){
    var message = '';
    if(Math.random() > 0.5) {
      this.player.spaceSuit -= this.room.monster.monsterDamage;
      message += `the monster hurt you!, your space suit lost ${this.room.monster.monsterDamage} armor.`;
    }
    this.room.monster.monsterHP -= this.player.damage;
    if(this.room.monster.monsterHP <= 0) {
      this.player.xp += 100;
      this.logTurn(`you killed the ${this.room.monster.monsterName} and gained 100 xp`);
      this.room.monster = null;
      return;
    }
    this.warnings();
    this.logTurn(message + ' you attacked the monster');
  }
};
GameController.prototype.reset = function(){
  console.log('I was pressed!');
  this.history = ['Welcome to Space Jail.  Your cell recently malfunctioned and open.  Try to escape!'];
  this.moveCount = 0;
  this.map = require('../model/map');

  this.player = {
    name: 'Space Ash',
    spaceSuit: 100,
    location: 'roomA',
    damage: 10,
    xp: 0
  };

  this.gameForm = {
    direction: 'North'
  };

  this.room = {
    name: this.player.location
  };
};
