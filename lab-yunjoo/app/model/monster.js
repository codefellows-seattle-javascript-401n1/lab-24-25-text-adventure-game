
'use strict';


const randomArrayItem = require('../lib/random-array-item');
const monsterNames = ['punky eater', 'dude#1', 'jerkyjerky', 'meh', 'bulky sausage'];

module.exports = function Monster(){
  this.name = randomArrayItem(monsterNames);
  this.dammage = Math.floor(Math.random() * 20) + 1;
  this.hp = Math.floor(Math.random() * 20) + 11;
};
