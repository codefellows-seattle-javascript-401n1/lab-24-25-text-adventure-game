'use strict';
const angular = require('angular');

const GameController = require('./game-controller');
const chanceOf = require('../lib/chance-of');

angular.module('trippedApp').controller('MapController', [GameController, MapController]);

var trap = false;
var troll = false;

var randomNum = function(times) {
  var newRandomNum = Math.floor(Math.random() * times + 1);
  return newRandomNum;
};

function MapController() {
  this.room = require('../model/room');
  this.hallway = require('../model/hallway'),
  this.bridge = {
    entrance: GameController.player.prevLocation,
    exit: this.door,
    over: this.overBridge,
    under: this.underBridge
  };
}

MapController.prototype.door = function() {
  let doorOpensTo;
  let newRandomNum = randomNum(10);
  if(newRandomNum <= 4) doorOpensTo = this.room;
  if(newRandomNum >= 5 && randomNum < 8) doorOpensTo = this.hallway;
  doorOpensTo = this.bridge;
  return doorOpensTo;
};

MapController.prototype.overBridge = function() {
  chanceOf.chanceOftrap;
  if(!trap) {
    return chanceOf.chanceOfCompanion;
  }
  return trap;
};
MapController.prototype.underBridge = function() {
  chanceOf.chanceOfTroll;
  if(!troll) {
    GameController.player.xp += randomNum(10);
    return chanceOf.chanceOfItem;
  }
  return troll;
};
