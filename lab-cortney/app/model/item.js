'use strict';

const randomArrayItem = require('../lib/random-array-item');
const itemNames = ['apple', 'cup-o-noodles'];

module.exports = function Item() {
  this.name = randomArrayItem(itemNames);
  this.addHp = Math.floor(Math.random() * 20) + 1;
};
