'use strict';

const angular = require('angular');

const deities = require('../model/deities');
const Odin = require('../model/odin');
const randomDeity = require('../lib/randomize.js');

// angular logic
angular.module('tindur').controller('GameController', [GameController]);

function GameController() {
  this.beginGame = null;
  this.history = ['You awaken at the base of a snowy mountain. Atop is Odin, God of war! Defeat him and claim your glory!!!'];
  this.moveCount = 0;
  this.map = require('../model/map');
  this.player = {
    name: 'Nameless Champion',
    hp: 100,
    damage: 20,
    glory: 0,
    location: 'baseCamp'
  };

  this.area = {
    name: this.player.location,
    map: this.map[this.player.location].src
  };

  this.moveDirection = function(action){
    this.moveCount++;
    var oldLocation = this.player.location;
    var newLocation = this.map[oldLocation][action];
    if (newLocation && newLocation !== 'nothing'){
      this.updateLocation(newLocation);
      return;
    }

    this.holdLocation(action);
  };

  this.holdLocation = function(){
    this.logTurn('There\'s nowehere to go that direction!');
  };

  this.updateLocation = function(location){
    this.player.location = location;
    this.area.name = location;
    if(Math.random() < this.map[location].deityChance){
      this.area.deity = randomDeity(deities);
      this.player.hp -= this.area.deity.damage;
      this.logTurn(`Upon approaching the ${this.player.location}, ${this.area.deity.name} appears and uses ${this.area.deity.power}. You lose ${this.area.deity.damage} hp.`);
      return;
    } else if (this.map[location].deityChance == 'Odin') {
      this.area.deity = Odin;
      this.player.hp -= this.area.deity.damage;
      this.logTurn(`You have reached the mountain's peak! ${this.area.deity.name} appears and uses ${this.area.deity.power}. You lose ${this.area.deity.damage} hp`);
      return;
    }

    this.area.deity = null;
    this.logTurn(`is now on ${this.player.location} which is empty`);
  };

  this.attackDeity = function(){
    this.moveCount++ ;
    if (this.area.deity) {
      var message = '';
      if (Math.random() > 0.5){
        this.player.hp -= this.area.deity.damage;
        message += ` ${this.area.deity.name} attacks with ${this.area.deity.power}! You lose ${this.area.deity.damage} `;
      }
      this.area.deity.hp -= this.player.damage;
      if (this.area.deity.hp <= 0){
        this.logTurn(`You defeated ${this.area.deity.name}! Onward to Glory!`);
        deities.splice(this.area.deity.index, 1);
        this.area.deity = null;
        this.player.glory++;
        return;
      }
      this.logTurn(message + `You attack ${this.area.deity.name} for ${this.player.damage}`);
    }
  };

  this.logTurn = function(message){
    this.history.push(`TURN ${this.moveCount}: ${this.player.name} - ${message}`);
  };

  this.intro = function(){
    this.beginGame = true;
  };
}
