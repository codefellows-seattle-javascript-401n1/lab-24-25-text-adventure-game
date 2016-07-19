'use strict';

const monsters = [
  {
    name: 'The Alien from Alien',
    bribe: 'Ray Gun'
  },
  {
    name: 'Sigourney Weaver',
    bribe: 'An Emmy Award'
  },
  {
    name: 'Jason',
    bribe: 'Hockey Mask'
  },
  {
    name: 'Leperchaun',
    bribe: 'Pot of Gold'
  }
];

const randomArrayItem = require('../lib/random-array-item');

module.exports = function() {
  const monster = randomArrayItem(monsters);
  this.name = monster.name;
  this.bribe = monster.bribe;
  this.damage = Math.floor(Math.random() * 20) + 1;
  this.hp = Math.floor(Math.random() * 20) + 11;
};
