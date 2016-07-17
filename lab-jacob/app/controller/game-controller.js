'use strict';

const angular = require('angular');

const Deity = require('../model/deities');

// angular logic
angular.modules('tindur').controller('GameController', [GameController]);

function GameController() {
  this.history = 'CLIMB THE MOUNTAIN, DEFEAT ODIN, CLAIM YOUR GLORY!!!!!';
  this.moveCount = 0;
  this.map = require('../model/map');

  this.player = {
    name: '',
    hp: '',
    damage: '',
    location: 'baseCamp'
  };

  this.area = {
    name: this.player.location
  };
}

GameController.prototype.moveDirection = function(direction){
  this.moveCount ++;
  var oldLocation = this.player.location;
  var newLocation = this.map[oldLocation][direction];
  if (newLocation && newLocation == 'sky'){ // if nowhere to climb
    this.noClimb();
    return;
  }
  if (newLocation && newLocation == 'ground'){ // if nowhere to leap
    this.noLeap();
    return;
  }

  this.updatelocation(newLocation);
};

GameController.prototype.noClimb = function(){
  this.logTurn('nothing but sky above');
};

GameController.prototype.noLeap = function(){
  this.logTurn('nothing but solid ground below');
};

GameController.prototype.updateLocation = function(location){
  this.player.location = location;
  this.area.name = location;
  if(Math.Random() < this.map[location].deityChance){
    this.area.monster = new Deity();
    this.player.hp -= this.area.deity.damage;
    this.logTurn(`is now in ${this.player.location}. A ${this.area.deity.name} attacked and you lost ${this.area.monster.damage} hp.`);
    return;
  }

  this.area.deity = null;
  this.logTurn(`is now in ${this.player.location} which is empty`);
};

GameController.prototype.attackDeity = function(){

};

GameController.prototype.logTurn = function(message){
  this.history.push(`TURN ${this.moveCount}: ${this.player.name} ${message}`);
};
