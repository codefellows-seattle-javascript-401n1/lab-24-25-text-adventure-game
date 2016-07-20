'use strict';

const angular = require('angular');

const deities = require('../model/deities');
const randomDeity = require('../lib/randomize.js');

// angular logic
angular.module('tindur').controller('GameController', [GameController]);

function GameController() {
  const vm = this;

  vm.history = ['You awaken at the base of a snowy mountain. Atop is Odin, God of war! Defeat him and claim your glory!!!'];
  vm.moveCount = 0;
  vm.map = require('../model/map');
  console.log('this.map: ', vm.map);
  vm.player = {
    name: 'Nameless Champion',
    hp: 100,
    damage: 20,
    location: 'baseCamp'
  };

  vm.area = {
    name: vm.player.location
  };

  vm.moveDirection = function(action){
    vm.moveCount++;
    var oldLocation = vm.area.name;
    var newLocation = vm.map[oldLocation][action];
    if (oldLocation && newLocation !== 'sky' || 'ground' || 'no retreat' || 'The trail has ended'){
      vm.updateLocation(newLocation);
      return;
    }

    vm.holdLocation(action);
  };

  vm.holdLocation = function(action){
    var noPass = vm.map[vm.player.location][action];
    if (noPass == 'sky') vm.logTurn('nothing above but sky');
    if (noPass =='ground') vm.logTurn('you\'re already at the base of the mountain');
    if (noPass == 'no retreat') vm.logTurn('you have nowhere to run');
    if (noPass == 'The trail has ended') vm.logTurn('The trail has ended');
  };

  vm.updateLocation = function(location){
    vm.player.location = location;
    vm.area.name = location;
    if(Math.random() < this.map[location].deityChance){
      this.area.deity = randomDeity(deities);
      this.player.hp -= this.area.deity.damage;
      this.logTurn(`Upon approaching the ${this.player.location}, ${this.area.deity.name} appears and uses ${this.area.deity.power}. You lose ${this.area.deity.damage} hp.`);
      return;
    }

    vm.area.deity = null;
    vm.logTurn(`is now on ${vm.player.location} which is empty`);
  };

  vm.attackDeity = function(){
    vm.moveCount++ ;
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

  vm.logTurn = function(message){
    vm.history.push(`TURN ${vm.moveCount}: ${vm.player.name} ${message}`);
  };
}
