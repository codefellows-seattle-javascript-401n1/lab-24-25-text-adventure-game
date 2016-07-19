'use strict';

const GameController = require('../controller/game-controller');
const Troll = require('../model/troll');
const Item = require('../model/item');
const Companion = require('../model/companion');


var trap = false;
var troll = false;
var randomNum = function(times) {
  var newRandomNum = Math.floor(Math.random() * times + 1);
  return newRandomNum;
};
module.exports = function chanceOfTroll() {
  if(randomNum(10) < 4) GameController.room.troll = new Troll();
  return troll;
};
module.exports = function chanceOfItem() {
  if(randomNum(10) < 4) GameController.player.item.push(new Item());
};
module.exports = function chanceOftrap() {
  if (randomNum(10) < 4) {
    GameController.player.hp -= randomNum(40) + 11;
    trap = true;
    return GameController.room.troll = new Troll();
  }
  return trap;
};
module.exports = function chanceOfCompanion(){
  if(randomNum(10) < 4) {
    GameController.player.xp += randomNum(20);
    return GameController.player.companion.push(new Companion());
  }
  GameController.player.xp += randomNum(10);
  return;
};
