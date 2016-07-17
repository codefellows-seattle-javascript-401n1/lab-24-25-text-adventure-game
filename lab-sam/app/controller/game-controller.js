'use strict'

const angular = require('angular');

const riddle = require(../)

angular.module('andventureApp').controller('GameController', [GameController]);

function GameController(){
  this.history = [`The road having been washed away a sudden storm you are forced to find shelter in a  cave just beyond the swollen river banks. Just beyond the cave entrance ${playerName} finds a grand stone doorway, the intricately carved face worn smooth by time and weather. Overcome by curiosity you light a torch and push the giant stone door. With a small grinding sound the door swings open far easier than you anticipated revealing a large foyer partially collapsed to the left, the bare stone floor scattered with dirt and leaves the only other exit to the South`];
  this.moveCount = 0;
  this.map = require('../model/map');
  this.room = {
    name: this.player.location
  };
}

GameController.prototype.movement = function(direction){
  this.moveCount++;
  var oldLocation = this.player.location;
  var newLocation = this.map[oldLocation][exits][direction];

};
