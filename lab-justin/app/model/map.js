'use strict';

var monsterChance = (Math.floor(Math.random()* 11))/10;

module.exports = {
  roomA: {
    north: 'wall',
    south: 'roomC',
    east: 'roomB',
    west: 'wall',
    monsterChance
  },

  roomB: {
    north: 'wall',
    south: 'roomD',
    east: 'wall',
    west: 'roomA',
    monsterChance
  },

  roomC: {
    north: 'roomA',
    south: 'wall',
    east: 'roomD',
    west: 'wall',
    monsterChance
  },

  roomD: {
    north: 'roomB',
    south: 'wall',
    east: 'wall',
    west: 'roomC',
    monsterChance
  }
};
