'use strict';

const randomArrayItem = require('../lib/random-array-item');
const monsterNames = ['donald trump', 'trump', 'asseyes', 'dump trump'];

module.exports = function Monster () {
  this.name = randomArrayItem(monsterNames);
  this.damage = Math.floor(Math.random () * 20) + 1;
  this.hp = Math.floor(Math.random () *20) + 11;
};
