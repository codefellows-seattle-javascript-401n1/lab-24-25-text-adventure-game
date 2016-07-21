'use strict';

const angular = require('angular');

const deities = require('../model/deities');
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
    location: 'baseCamp'
  };

  this.area = {
    name: this.player.location
  };

  this.moveDirection = function(action){
    this.moveCount++;
    var oldLocation = this.area.name;
    var newLocation = this.map[oldLocation][action];
    if (oldLocation && newLocation !== 'sky' || 'ground' || 'no retreat' || 'The trail has ended'){
      this.updateLocation(newLocation);
      return;
    }

    this.holdLocation(action);
  };

  this.holdLocation = function(action){
    var noPass = this.map[this.player.location][action];
    if (noPass == 'sky') this.logTurn('nothing above but sky');
    if (noPass =='ground') this.logTurn('you\'re already at the base of the mountain');
    if (noPass == 'no retreat') this.logTurn('you have nowhere to run');
    if (noPass == 'The trail has ended') this.logTurn('The trail has ended');
  };

  this.updateLocation = function(location){
    this.player.location = location;
    this.area.name = location;
    if(Math.random() < this.map[location].deityChance){
      this.area.deity = randomDeity(deities);
      this.player.hp -= this.area.deity.damage;
      this.logTurn(`Upon approaching the ${this.player.location}, ${this.area.deity.name} appears and uses ${this.area.deity.power}. You lose ${this.area.deity.damage} hp.`);
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
        message += `${this.area.deity.name} attacks with ${this.area.deity.power}! You lose ${this.area.deity.damage}`;
      }
      this.area.deity.hp -= this.player.damage;
      if (this.area.deity.hp <= 0){
        this.logTurn(`You defeated ${this.area.deity.name}! Onward to Glory!`);
        this.area.deity = null;
        return;
      }
      this.logTurn(message + `You attack ${this.area.deity.name} for ${this.player.damage}`);
    }
  };

  this.logTurn = function(message){
    this.history.push(`TURN ${this.moveCount}: ${this.player.name} ${message}`);
  };

  this.intro = function(){
    this.beginGame = true;
  };
}
