'use strict';

const angular = require('angular');
const Monster = require('../model/monster');
const Item = require('../model/items');

angular.module('adventureGame').controller('GameController', [GameController]);

function GameController() {
  this.history = ['GOOD LUCK IN THE SPACE STATION -- ALL SYSTEMS DOWN.'];

  this.map = require('../model/map');
  this.player = {
    name: 'Reptar',
    hp: 100,
    damage: 5,
    xp: 0,
    location: 'moduleA1',
    items: []
  };

  this.gameForm = {
    direction: 'forward'
  };

  this.stationModule = {
    name: this.player.location
  };

  this.moveCount = 1;
}

GameController.prototype.moveDirection = function (direction) {
  this.moveCount++;
  const oldLocation = this.player.location;
  const newLocation = this.map[oldLocation][direction];

  if (newLocation && newLocation !== 'hull') {
    this.updateLocation(newLocation);
    return;
  }

  this.holdLocation();
  return;
};

GameController.prototype.updateLocation = function(location) {
  this.player.location = location;
  this.stationModule.name = location;
  this.stationModule.item = null;

  if (Math.random() < this.map[location].monsterChance) {
    this.stationModule.monster = new Monster();
    this.player.hp -= this.stationModule.monster.damage;
    this.updateHistory(`ran into ${this.stationModule.monster.name} and lost ${this.stationModule.monster.damage} hp`);
    return;
  }

  if (Math.random() < this.map[location].itemChance) {
    this.stationModule.item = new Item();
    this.pickUpItem(this.stationModule.item.name);

  }

  this.stationModule.monster = null;
  this.stationModule.item = null;
  this.updateHistory(`is now in ${this.player.location}.`);
};

GameController.prototype.attackMonster = function() {
  if (this.stationModule.monster) {
    this.moveCount++;
    let message = '';

    this.stationModule.monster.hp -= this.player.damage;
    this.updateHistory(`did ${this.player.damage} damage to the monster.`);
    if (Math.random() > 0.5) {
      this.player.hp -= this.stationModule.monster.damage;
      message += ` -- the monster hurt you! You lost ${this.stationModule.monster.damage} hp.`;
      this.updateHistory(message);
    }

    if(this.stationModule.monster.hp < 0) {
      this.updateHistory(`killed ${this.stationModule.monster.name}!`);
      this.player.xp += Math.floor(Math.random() * 50);
      this.stationModule.monster = null;
      return;
    }

    if (this.amIDead()) {
      this.updateHistory(' is now dead. The Station wins.');
      this.player.hp = 0;
      return;
    }
  }
};

GameController.prototype.amIDead = function() {
  if (this.player.hp <= 0) return true;
  return false;
};

GameController.prototype.pickUpItem = function(item) {
  if (this.player.items.indexOf(item) === -1) {
    this.player.items.push(item);
    this.updateHistory(`picked up ${item}.`);
    return;
  }

  this.updateHistory(`cannot pick up ${item}. Already in inventory`);
};

GameController.prototype.useItem = function() {
  if (this.player.items.indexOf(this.stationModule.monster.bribe) !== -1) {

    //is there a better way to remove the item from the array?
    this.player.items = this.player.items.filter((item) => {
      return item !== this.stationModule.monster.bribe;
    });

    this.stationModule.monster = null;
    this.updateHistory('bribed the moster!');
    return;
  }

  this.updateHistory(`doesn't have the correct item. You need a ${this.stationModule.monster.bribe} to bribe the monster`);
};

GameController.prototype.holdLocation = function () {
  this.updateHistory('ran into the hull.');
};

GameController.prototype.updateHistory = function(message) {
  this.history.push(`MOVE ${this.moveCount}: ${this.player.name} ${message}`);
};
