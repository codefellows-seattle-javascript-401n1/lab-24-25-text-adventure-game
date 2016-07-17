'use strict';
const randomArray = require('../lib/random-array');
var monsterNames = ['Thumper', 'Trample Toes', 'Yellthron', 'Snot Tongue', 'Toeless Trampler', 'Margret', 'growling Toe Tickler'];
module.exports = function Monster(){
  this.name = randomArray(monsterNames);
  this.damage = Math.floor(Math.random() * 20 + 1);
  this.hp = Math.floor(Math.random() * 20) + 11;
};
