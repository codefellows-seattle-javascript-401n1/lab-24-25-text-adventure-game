'use strict';

const angular = require('angular');

angular.module('adventureApp').controller('GameController', [GameController]);

function GameController(){
  this.player = {
    name: 'Nosy Ned',
    hp: 100,
    damage: 4,
    xp: 0,
    location: 'Foyer',
    weapon: 'a flimsy torch'
  };

  this.history = [];
  this.moveCount = 0;
  this.map = require('../model/map');
  this.room = this.map[this.player.location];

  this.direction = {
    direction: 'south'
  };
  this.combat = true;
  this.lootable = false;

}

GameController.prototype.movement = function(direction){
  this.moveCount++;
  var oldLocation = this.player.location;
  var newLocation = this.map[oldLocation][direction];
  if (newLocation && newLocation !== 'wall'){
    this.updateLocation(newLocation);
    console.log('MOVE this.player.location', this.player.location);
    console.log('MOVE this.room:', this.room);
    return;
  }
  this.holdLocation();
};

GameController.prototype.updateLocation = function(location){
  this.player.location = location;
  console.log('this.player.location', this.player.location);
  console.log('this.room:', this.room);
  this.room.name = location;
  this.room = this.map[this.player.location];
  if (this.room.foes){
    this.combat = true;
    this.player.hp -= this.room.foes.attack;
    this.logTurn(`and found ${this.player.location} and was attacked by a ${this.room.foes.name}`);
  }
  else if (this.room.things && !this.room.foes){
    this.lootable = true;
    this.combat = false;
    this.logTurn(`and found ${this.player.location}. There is something you can Loot here.`);
  }
  else {
    this.combat = false;
    this.logTurn(`and found ${this.player.location}. There doesn't appear to be anyone here.`);
  }
};

GameController.prototype.holdLocation = function(){
  this.logTurn('and hit a wall.');
};

GameController.prototype.logTurn = function(message){
  this.history.unshift(`TURN ${this.moveCount}: ${this.player.name} went ${this.direction} ${message}`);
};

GameController.prototype.logFight = function(message){
  this.history.unshift(`TURN ${this.moveCount}: ${this.player.name} attacked the ${this.room.foes.name} ${message}`);
};

GameController.prototype.loot = function(){
  this.player.damage += 5;
  this.player.weapon = this.room.things;
  this.history.unshift(`TURN ${this.moveCount}: ${this.player.name} had found a ${this.room.things}, you feel a bit safer with a weapon in your hands`);
  this.lootable = false;
};

GameController.prototype.playerAttack = function(){
  this.moveCount++;
  this.room.foes.hp -= this.player.damage + (Math.floor(Math.random() * (8 - 1 +1)) + 1);
  console.log('Enemy HP', this.room.foes.hp);
  if (this.room.foes.hp < 1){
    console.log('LESS THAN 1');
    this.combat = false;
    this.logFight('and Killed it!');
  }  else if (this.player.hp < 50 ){
    this.player.hp -= this.room.foes.attack;
    this.logFight(`but it still stands and attacks back!, ${this.player.name} is not looking good`);
  } else{
    this.player.hp -= this.room.foes.attack;
    this.logFight('but it still stands and attacks back!');
  }
};
