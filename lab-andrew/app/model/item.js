'use strict';

const randomArray = require('../lib/random-array');
const itemNames = ['dagger', 'butterflyNet', 'fishingPole', 'potion', 'coin', 'wine'];

module.exports = function Item(){
  this.name = randomArray(itemNames);
  this.myst = Math.floor(Math.random() * 20 + 1);
  this.hp = Math.floor(Math.random() * 10 + 1);
};
