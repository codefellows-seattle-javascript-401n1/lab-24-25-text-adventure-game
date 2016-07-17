'use strict';
const angular = require('angular');

const GameController = require('./game-controller');
const Troll = require('../model/troll');
const Companion = require('../model/companion');


angular.module('trippedApp').controller('MapController', [MapController]);


var trap = false;

var randomNum = function(times) {
  var newRandomNum = Math.floor(Math.random() * times + 1);
  return newRandomNum;
};
function MapController() {
  this.bridge = {
    entrance: GameController.player.prevLocation,
    exit: this.door,
    over: this.overBridge,
    under: underBridge()
  };
  this.hallway = {},
  this.room = {};
}

MapController.prototype.door = function() {
  let doorOpensTo;
  let randomNum = Math.floor(Math.random() * 10 + 1);
  if(randomNum <= 4) doorOpensTo = 'room';
  if(randomNum >= 5 && randomNum < 8) doorOpensTo = 'hallway';
  doorOpensTo = 'bridge';
  return;
};

MapController.prototype.overBridge = function() {
  this.chanceOftrap;
  if(!trap) {
    this.chanceOfCompanion;
  }
};
MapController.prototype.chanceOftrap = function() {
  if (randomNum(10) < 4) {
    GameController.player.hp -= randomNum(40) + 11;
    trap = true;
    return new Troll();
  }
  return trap;
};
MapController.prototype.chanceOfCompanion = function(){
  if(randomNum(10) < 4) {
    GameController.player.xp += randomNum(20);
    return new Companion();
  }
  return GameController.player.xp += randomNum(10);
};
