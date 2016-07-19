'use strict';
const angular = require('angular');

const GameController = require('./game-controller');
const chanceOf = require('../lib/chance-of');

angular.module('trippedApp').controller('GameController', [GameController]);

var trap = false;
var troll = false;

var randomNum = function(times) {
  var newRandomNum = Math.floor(Math.random() * times + 1);
  return newRandomNum;
};

function Map() {
  this.room = require('../model/room');
  this.hallway = require('../model/hallway'),
  this.bridge = {
    entrance: GameController.player.prevLocation[0],
    exit: this.door,
    over: this.overBridge,
    under: this.underBridge,
    myst: randomNum(10)
  };
}

Map.prototype.door = function() {
  let doorOpensTo;
  let newRandomNum = randomNum(10);
  if(newRandomNum <= 4) doorOpensTo = this.room[randomNum(4)];
  if(newRandomNum >= 5 && randomNum < 8) doorOpensTo = this.hallway[randomNum[5]];
  doorOpensTo = this.bridge;
  return doorOpensTo;
};

Map.prototype.overBridge = function() {
  chanceOf.chanceOftrap;
  if(!trap) {
    return chanceOf.chanceOfCompanion;
  }
  return trap;
};
Map.prototype.underBridge = function() {
  chanceOf.chanceOfTroll;
  if(!troll) {
    GameController.player.xp += randomNum(10);
    return chanceOf.chanceOfItem;
  }
  return troll;
};
