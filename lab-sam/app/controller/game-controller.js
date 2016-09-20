'use strict';

const angular = require('angular');

angular.module('adventureApp').controller('GameController', [GameController]);

function GameController(){
  this.player = {
    name: 'Nosy Ned',
    hp: 100,
    damage: 10,
    xp: 0,
    location: 'Foyer'
  };

  this.history = [`The road having been washed away a sudden storm you are forced to find shelter in a  cave just beyond the swollen river banks. Just beyond the cave entrance ${this.player.name} finds a grand stone doorway, the intricately carved face worn smooth by time and weather. Overcome by curiosity you light a torch and push the giant stone door. With a small grinding sound the door swings open far easier than you anticipated revealing a large foyer partially collapsed to the left, the bare stone floor scattered with dirt and leaves. The only exit to the South`];
  this.moveCount = 0;
  this.map = require('../model/map');
  this.room = this.map[this.player.location];

  this.direction = {
    direction: 'south'
  };
  this.combat = true;

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
  }
  if (!this.room.foes){
    this.combat = false;
  }
  this.logTurn(`and found ${this.player.location}. ${this.player.location.description}`);
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

GameController.prototype.playerAttack = function(){
  this.room.foes.hp -= Math.floor(Math.random() * (this.player.damage - 1 +1)) + 1;
  if (this.room.foes.hp > 1){
    this.combat = false;
    this.logFight('and Killed it!');
  }
};
