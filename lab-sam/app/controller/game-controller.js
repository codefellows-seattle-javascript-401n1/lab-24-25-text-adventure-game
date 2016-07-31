'use strict'

const angular = require('angular');

// const riddle = require(../)

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
  this.room = {
    name: this.player.location
  };

this.direction = {
    direction: 'south'
  };


}

GameController.prototype.movement = function(direction){
  this.moveCount++;
  var oldLocation = this.player.location;
  var newLocation = this.map[oldLocation][direction];
  if (newLocation && newLocation !== 'wall'){
    this.updateLocation(newLocation)
    return
  }
  this.holdLocation();
  };

  GameController.prototype.updateLocation = function(location){
  this.player.location = location;
  this.room.name = location;
  // if (this.map[location].foes){
  //   this.room.monster = new Monster();
  //   this.player.hp -= this.room.monster.dammage;
  //   this.logTurn(`is now in ${this.player.location}. a ${this.room.monster.name} attacked. you lost ${this.room.monster.dammage}`)
  //   return;
  // }

  // this.room.monster = null;
  this.logTurn(`and found ${this.player.location}. ${this.player.location.description}`);
};
GameController.prototype.holdLocation = function(){
  this.logTurn(`and hit a wall.`);
};

GameController.prototype.logTurn = function(message){
  this.history.unshift(`TURN ${this.moveCount}: ${this.player.name} went ${this.direction} ${message}`);
};
