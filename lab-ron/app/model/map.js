'use strict';

module.exports = {
  roomA:{
    north: 'wall',
    south: 'roomC',
    east: 'roomB',
    west: 'wall',
    monsterChance: 0.75,
  },
  roomB:{
    north: 'wall',
    south: 'roomD',
    east: 'wall',
    west: 'roomA',
    monsterChance: 0.5,
  },
  roomC:{
    north: 'roomA',
    south: 'wall',
    east: 'roomD',
    west: 'wall',
    monsterChance: 0.75,
  },
  roomD:{
    north: 'roomB',
    south: 'wall',
    east: 'wall',
    west: 'roomC',
    monsterChance: 0.5,

  }
};
