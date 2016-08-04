'use strict';
const randomArray = require('../lib/random-array');
var companionNames = ['Splice', 'Charger', 'Bugs Bain', 'Derpy', 'Felbert', 'Dugwiggin', 'Flippy Tooth', 'Snatch Grab', 'Gladwing'];
module.exports = function Companion(){
  this.name = randomArray(companionNames);
  this.damage = Math.floor(Math.random() * 30 + 1); 
  this.hp = Math.floor(Math.random() * 5 + 1);
};
