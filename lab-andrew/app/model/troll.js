'use strict';
const randomArray = require('../lib/random-array');
var trollNames = ['Thumper', 'Tiny Toes', 'Yellthron', 'Snot Tongue', 'Toeless Trampler', 'Margret', 'Growling Gorg;le', 'Sit storm'];
module.exports = function Monster(){
  this.name = randomArray(trollNames);
  this.damage = Math.floor(Math.random() * 20 + 1);
  this.hp = Math.floor(Math.random() * 20) + 11;
};
