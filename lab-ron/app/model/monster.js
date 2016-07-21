'use strict';

const randomArrayItem = require('../lib/random-array-item');
const monsterNames = ['SnugglyBunny', 'PuttyTat', 'FluffyBunny', 'SugarLips', 'MegaSalter', 'ChickenButt', 'Snookums'];

module.exports = function Monster() {
  this.name = randomArrayItem(monsterNames);
  this.damage = Math.floor(Math.random()*20)+5;
  this.hp = Math.floor(Math.random()*20)+11;
};
