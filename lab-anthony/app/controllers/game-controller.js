'use strict';

//npm modules
const angular = require('angular');

//app modules
const Monster = require('../models/monster.js');

//modules logic
angular.module('monsterMash').controller('MonsterController', [MonsterController]);

function MonsterController() {
  this.history = ['You have entered the room! Get ready to mash some monsters!'];
  this.moveCount = 0;
  this.map = require('../models/map');

  this.gameStart = false;
  this.gameOver = false;

  this.player = {
    name: 'Big Money',
    hp: 10,
    damage: 10,
    xp: 0,
    location: 'roomA'
  };

  this.gameForm = {
    direction: 'east'
  };

  this.room = {
    name: this.player.location
  };
}

MonsterController.prototype.moveDirection = function(direction) {
  this.isDead();
  this.moveCount ++;
  var oldLocation = this.player.location;
  var newLocation = this.map[oldLocation][direction];
  if(newLocation && newLocation !== 'wall') {
    this.updateLocation(newLocation);
    return;
  }

  this.holdLocation();
};

MonsterController.prototype.updateLocation = function(location) {
  this.player.location = location;
  this.room.name = location;
  if(Math.random() < this.map[location].monsterOdds) {
    this.room.monster = new Monster();
    this.player.hp -= this.room.monster.damage;
    this.logTurn(`is now in ${this.player.location}. A ${this.room.monster.name} attacked! You lost ${this.room.monster.damage}.`);
    this.isDead();
    return;
  }

  this.room.monster = null;
  this.logTurn(`is now in ${this.player.location}. The room is empty.`);
};

MonsterController.prototype.holdLocation = function() {
  this.logTurn('you hit a wall.');
};

MonsterController.prototype.logTurn = function(message) {
  this.history.push(`Turn ${this.moveCount}: ${this.player.name} ${message}`);
};

MonsterController.prototype.hurtMonster = function() {
  this.moveCount ++;
  if(this.room.monster){
    var message = '';
    if(Math.random() > 0.4) {
      this.player.hp -= this.room.monster.damage;
      message += `The monster hurt you! You lost ${this.room.monster.damage}.`;
    }
    this.room.monster.hp -= this.player.damage;
    if (this.room.monster.hp < 0) {
      this.player.xp += 100;
      this.logTurn(`You killed the ${this.room.monster.name} and gained 100 xp!`);
      this.room.monster = null;
      return;
    }
    this.logTurn(message + ' you attacked the monster.');
  }
  this.isDead();
};

MonsterController.prototype.gameBegin = function() {
  this.gameStart = true;
  this.gameOver = false;
};

MonsterController.prototype.gameEnd = function() {
  this.gameOver = true;
  this.history = ['You have entered the room! Get ready to mash some monsters!'];
  this.player.hp = 10;
};

MonsterController.prototype.isDead = function() {
  if (this.player.hp <= 0) {
    this.gameEnd();
  }
};
