'use strict';
const randomArray = require('../lib/random-array');
const trollNames = ['Thumper', 'Tiny Toes', 'Yellthron', 'Snot Tongue', 'Toeless Trampler', 'Margret', 'Growling Gorgle', 'Sit storm'];
module.exports = function Troll(){
  this.name = randomArray(trollNames);
  this.damage = Math.floor(Math.random() * 50 + 1);
  this.hp = Math.floor(Math.random() * 20) + 11;
};
