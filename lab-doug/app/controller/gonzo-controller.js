'use strict';
const angular = require('angular');
const map = require('../model/map');
const Monster = require('../model/monster');

angular.module('gonzoApp').controller('GonzoController', [GonzoController]);

function GonzoController() {
  this.history = ['Welcome, you have 100 health points to begin.'];

  this.map = map;

  this.player = {
    name: 'bob',
    hp: 100,
    strength: 50,
    location: 'roomA'
  };
  this.room = {
    name: this.player.location,
    monster: null,
    item: null
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
  var randomProbability = Math.random();
  console.log('randomProbability: ', randomProbability);
  if(randomProbability > this.map[newLocation].monsterProbability){
    this.room.monster = new Monster();
    this.player.hp -= this.room.monster.damage;
    this.history.push(`move: ${this.movesCounter}  , moved to ${this.player.location} and had a fight with ${this.room.monster.name}.  You now have ${this.player.hp} healthpoints remaining`);
    return;
  }
  this.history.push(`move: ${this.movesCounter}  , moved to ${this.player.location}`);

};


GonzoController.prototype.doNotUpdateLocation = function(){
  this.history.push(`move ${this.movesCounter} , bad choice, you bumped into  a wall and are still in ${this.player.location}`);
};
