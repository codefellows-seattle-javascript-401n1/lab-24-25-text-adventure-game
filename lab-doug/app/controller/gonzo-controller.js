'use strict';
const angular = require('angular');
const map = require('../model/map');

angular.module('gonzoApp').controller('GonzoController', [GonzoController]);

function GonzoController() {
  this.history = ['Welcome'];

  this.map = map;

  this.player = {
    name: 'bob',
    hp: 100,
    location: 'roomA'
  };

  this.gameForm = {
    direction: 'north'
  };

  this.movesCounter = 0;

}

GonzoController.prototype.moveDirection = function(direction){
  this.movesCounter++;
  var oldLocation = this.player.location;
  var newLocation = this.map[oldLocation][direction];
  if (newLocation){
    this.updateLocation(newLocation);
    return;
  } else {
    this.doNotUpdateLocation();
    return;
  }
};

GonzoController.prototype.updateLocation = function(newLocation){
  this.player.location = newLocation;
  this.history.push(`move: ${this.movesCounter}  , moved to ${this.player.location}`);
};

GonzoController.prototype.doNotUpdateLocation = function(){
  this.history.push(`move ${this.movesCounter} , bad choice, you bumped into  a wall and are still in ${this.player.location}`);
};
