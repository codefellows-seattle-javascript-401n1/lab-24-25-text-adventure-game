'use strict';


const randomArrayItem = require('../lib/random-array-item');
const monsterNames = ['Bill Gates', 'Larry Page', 'Mark Zuckerberg', 'Jeff Bezos', 'Satya Nadella', 'Jack Dorsey'];

module.exports = function Monster(){
  this.name = randomArrayItem(monsterNames);
  this.dammage = Math.floor(Math.random() * 20) + 1;
  this.hp = Math.floor(Math.random() * 20) + 11;
};
