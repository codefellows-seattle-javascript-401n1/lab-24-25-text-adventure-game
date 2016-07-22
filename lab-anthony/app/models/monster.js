'use strict';

const randomArrayIndex = require('../lib/random-array-index');

const monsters = ['Bubble Devil', 'Pancake Wiggle', 'Pickle Paddle', 'Fecal Freeze'];

module.exports = function Monster() {
  this.name = randomArrayIndex(monsters);
  this.damage = Math.floor(Math.random() * 20) + 1;
  this.hp = Math.floor(Math.random() * 50) + 1;
};
