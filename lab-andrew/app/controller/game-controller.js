'use strict';

const angular = require('angular');

angular.module('trippedApp').controller('GameController', [GameController,]);
const Room = require('../model/room');
const Troll = require('../model/troll');
const logTurn = require('../lib/log-turn');

function GameController() {
  this.xp += 2;
  this.moveCount++;
  this.moveCount = 0;
  this.map = Room;
  this.gameLog = [];
  this.prevLocation = [Room.room.roomB];
  this.player = {
    name: 'The Chosen',
    hp: 100,
    damage: 5,
    //Myst is magic
    myst: 0,
    xp: 0,
    companion: [],
    item: [],
    currentLocation: Room.room.roomB
  };
  this.room = {
    name: this.player.currentLocation
  };
}
GameController.prototype.moveDirection =  function(direction) {
  this.moveCount++;
  var oldLocation = this.player.currentLocation;
  var newLocation = this.map[oldLocation][direction];
  if(newLocation) this.updateLocation(newLocation);
  return;
};

GameController.prototype.updateLocation = function(location){
  this.player.currentLocation = location;
  this.room.name = location;
  if(this.room.troll){
    this.player.hp -= this.room.troll.damage;
    logTurn(`is now in ${this.player.currentLocationlocation}. a ${this.troll.name} has attaked!`);
    return;
  }
  this.room.troll = null;
  logTurn(`is now in ${this.player.currentLocation} and all is still...`);
};

GameController.prototype.attackTroll = function(){
  this.moveCount++;
  if(this.room.troll){
    var message = '';
    if(Math.random() > 0.5) {
      this.player.hp -= this.room.troll.damage;
      message += 'the Troll has attacked!';
    }
    this.room.troll.hp -= this.player.damage;
    if(this.troll.hp < 0){
      this.player.xp += 20;
      logTurn(`you killed ${this.room.troll.name}!`);
      this.room.troll = null;
      return;
    }
    logTurn(message + `you attacked ${this.room.troll}!`);
  }
};
