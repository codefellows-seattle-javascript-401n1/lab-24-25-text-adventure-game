'use strict';

const angular = require('angular');

const Troll = require('../model/troll');
const Item = require('../model/item');
const Companion = require('../model/companion');



angular.module('trippedApp').controller('GameController', [GameController,]);

function GameController() {
  this.history = ['You enter a lonely chamber...'];
  this.moveCount = 0;
  this.map = require('../model/map');
  this.player = {
    name: 'The Chosen',
    hp: 100,
    damage: 5,
    myst: 0,
    hasMyst: false,
    xp: 0,
    companion: [],
    item: [],
    hasItem: false,
    currentLocation: 'entry'
  };
  this.gameForm = {
    direction: 'north'
  };
  this.room = {
    name: this.player.currentLocation,
    searched: false,
    playerAlive: true,
    roomLocation: 'entry'
  };
}
GameController.prototype.moveDirection = function(direction){
  this.moveCount++;
  var oldLocation = this.player.currentLocation;
  var newLocation = this.map[oldLocation][direction];
  if(newLocation) {
    if (newLocation !== 'wall') {
      this.trapDoor(newLocation);
      this.updateLocation(newLocation);
      return;
    }
    this.holdLocation();
  }
};

GameController.prototype.updateLocation = function(location){
  this.player.currentLocation = location;
  this.room.roomLocation = location;
  this.room.name = location;
  this.room.searched = false;
  if(this.player.hp < 100) this.player.hp += 2;
  if (Math.random() < this.map[location].chanceOfTroll){
    this.chanceOfTroll();
    if(this.player.hp <= 0) {
      this.player.hp = 'dead';
      this.room.playerAlive = false;
      return this.logTurn(`${this.room.troll.name} has destroeyd you. You pass now into the nothingness.`);
    }
    return;
  }

  this.room.troll = null;
  this.logTurn(` is now in ${this.room.name}, the room is empty`);
};
GameController.prototype.holdLocation = function(){
  this.history.push(`TURN${this.moveCount}: ${this.player.name} hit a wall`);
};
GameController.prototype.logTurn = function(message) {
  this.history.push(`PLAY: ${this.moveCount}: ${this.player.name}:${message}`);
};

GameController.prototype.attackTroll = function(){
  this.moveCount++;
  if (this.room.troll){
    var message = '';
    if (Math.random() > 0.5 ) {this.player.hp -= this.room.troll.damage;
      if(this.player.hp <= 0) {
        this.player.hp = 'dead';
        this.room.playerAlive = false;
        return message += `${this.room.troll.name} has destroeyd you. You pass now into the nothingness.`;
      }
      message += `the troll hurt you!, you lost ${this.room.troll.damage}.`;
    }
    this.room.troll.hp -= this.player.damage;
    if (this.room.troll.hp < 0){
      this.player.xp += 20;
      this.logTurn(`you killed ${this.room.troll.name} and gained 20 xp`);
      this.room.troll = null;
      return;
    }
    this.logTurn(message + ' you attacked the troll');
  }
};
GameController.prototype.searchRoom = function(location) {
  this.moveCount++;
  this.room.item = new Item();
  this.room.searched = true;
  this.trapDoor(location);
  console.log('room item', this.room.item.name);
  if(location === 'eight') this.ladder();
  if (Math.random() < this.map[location].chanceOfItem) {
    this.player.hasItem = true;
    this.player.item.push(this.room.item);
    this.player.myst += this.room.item.myst;
    this.player.hasMyst = true;
    return this.logTurn(`you have found ${this.player.item[0].name}`);
  }
  this.logTurn('you search and find nothing');
};
GameController.prototype.castMyst = function() {
  this.moveCount++;
  let castedMyst = Math.random();
  if (castedMyst <= 0.5) castedMyst = this.player.item[0].myst || 5;
  if (castedMyst) castedMyst = this.player.item[0].hp;
  if(this.room.troll && (castedMyst = this.player.item[0].myst)) {
    this.room.troll.hp -= castedMyst;
    this.player.myst -= castedMyst;
    if(this.player.myst <= 0) {
      this.player.myst = 0;
      this.player.hasMyst = false;
    }
    if(this.room.troll.hp <= 0) {
      this.player.xp += 20;
      this.logTurn(`You have Cast Myst at ${this.room.troll.name} and the beast now thinks he is a rock. You may now move on`);
      this.room.troll = null;
      return;
    }
    return this.logTurn(`You cast Myst at ${this.room.troll.name} and he has wavered`);
  }
  console.log('castedMyst no troll', castedMyst);
  if (this.player.hp === 100) {
    this.player.myst -= castedMyst;
    if(this.player.myst <= 0) {
      this.player.myst = 0;
      this.player.hasMyst = false;
    }
    return this.logTurn('your strength is sound');
  }
  this.player.hp += this.player.item[0].hp;
  this.player.myst -= this.player.item[0].myst;
  if(this.player.myst <= 0) {
    this.player.myst = 0;
    this.player.hasMyst = false;
  }
  return this.logTurn('you feel the Myst stregthen you');
};
GameController.prototype.throwItem = function() {
  this.moveCount++;
  if(this.room.troll){
    this.logTurn(`you have thrown ${this.player.item[0].name} at ${this.room.troll.name}!`);
    this.room.troll -= Math.random(Math.floor() * 10 +1);
    this.player.myst -= this.player.item[0].myst;
    if(this.player.myst === 0) this.player.hasMyst = false;
    this.player.item.pop();
    return;
  }
  this.logTurn(`you have thrown the ${this.player.item[0].name} into the darkness`);
  this.player.myst -= this.player.item[0].myst;
  if(this.player.myst === 0) this.player.hasMyst = false;
  this.player.item.pop();
  if(this.room.troll.hp <= 0) {
    this.logTurn(`you killed ${this.room.troll.name}`);
    this.room.troll = null;
  }
  if(this.player.item.length === 0) this.player.hasItem = false;
  return;
};
GameController.prototype.chanceOfTroll = function() {
  this.room.troll = new Troll();
  this.player.hp -= this.room.troll.damage;
  this.logTurn(`${this.room.troll.name} has attacked and you lost ${this.room.troll.damage}!`);
  return;
};

GameController.prototype.trapDoor = function(location) {
  if(location === 'two') {
    if(Math.random() < 0.3) {
      this.player.currentLocation = 'eight';
      this.player.hp -= 10;
      this.logTurn('you have fallen through a trap door!');
      if (Math.random() < this.map[location].chanceOfTroll){
        this.chanceOfTroll();
        return;
      }
      this.player.currentLocation = 'eight';
      return this.logTurn('the dust clears and you find yourself in a cold dark chamber.');
    }
    return this.logTurn('you pause... the air is thick and full of mystery');
  }
};
GameController.prototype.ladder = function() {
  if(Math.random() < 0.5) {
    this.player.currentLocation = 'two';
    this.logTurn('you find a ladder and climb');
    if (Math.random() < this.map['two'].chanceOfTroll){
      this.chanceOfTroll();
    }
  }
  this.logTurn(' you find shards and splinters and wonder what was here, and where is it now.');
};
GameController.prototype.overBridge = function(location) {
  if(Math.random < this.map[location].chanceOfTroll){
    this.chanceOfTroll();
    return this.logTurn(`There was a trap set on the bridge! You have fallen and now face ${this.room.troll.name}!`);
  }
  if(Math.random() < this.map[location].chanceOfCompanion) {
    this.player.companion.push(new Companion());
    this.logTurn(`you find a small creature named ${this.player.companion[0].name} that will now join your quest!`);
  }
};
