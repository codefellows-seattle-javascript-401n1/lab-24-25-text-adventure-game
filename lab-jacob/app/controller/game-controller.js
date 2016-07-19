'use strict';

const angular = require('angular');

//const Deity = require('../model/deities');

// angular logic
angular.module('tindur').controller('GameController', [GameController]);

function GameController() {
  const vm = this;

  vm.history = ['You awaken at the base of a snowy mountain. Atop is Odin, God of war! Defeat him and claim your glory!!!'];
  vm.moveCount = 0;
  vm.map = require('../model/map');
  console.log('this.map: ', vm.map);
  vm.player = {
    name: 'Worthless peasant',
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
    console.log('oldlocation: ', oldLocation);
    var newLocation = vm.map[oldLocation][action];
    console.log('newLocation: ', newLocation);
    if (oldLocation && newLocation !== 'sky' || 'ground' || 'no retreat' || 'The trail has ended'){
      vm.updateLocation(newLocation);
      return;
    }

    vm.holdLocation(action);
  };

  vm.holdLocation = function(action){

    var noPass = vm.map[vm.player.location][action];
    if (noPass == 'sky') vm.logTurn('nothing above but sky');
    if (noPass =='ground') vm.logTurn('you\re already at the base of the mountain');
    if (noPass == 'no retreat') vm.logTurn('you have nowhere to run');
    if (noPass == 'The trail has ended') vm.logTurn('The trail has ended');
  };

  vm.updateLocation = function(location){

    vm.player.location = location;
    vm.area.name = location;
    // if(Math.Random() < this.map[location].deityChance){
    //   this.area.monster = new Deity();
    //   this.player.hp -= this.area.deity.damage;
    //   this.logTurn(`is now in ${this.player.location}. A ${this.area.deity.name} attacked and you lost ${this.area.monster.damage} hp.`);
    //   return;
    // }

    vm.area.deity = null;
    vm.logTurn(`is now on ${vm.player.location} which is empty`);
  };

  vm.attackDeity = function(){

  };

  vm.logTurn = function(message){
    vm.history.push(`TURN ${vm.moveCount}: ${vm.player.name} ${message}`);
  };
}
