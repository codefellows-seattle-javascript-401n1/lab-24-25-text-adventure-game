'use strict';

//use default map view for lab, customize later//
//monsterChance is a probalbility of a trump monster being inside a room//
module.exports = {
  roomA: {
    north: 'wall',
    south: 'roomC',
    east: 'roomB',
    west: 'wall',
    monsterChance: 0.2
  },

  roomB: {
    north: 'wall',
    south: 'roomD',
    east: 'wall',
    west: 'roomA',
    monsterChance: 0.5
  },

  roomC: {
    north: 'roomA',
    south: 'wall',
    east: 'roomD',
    west: 'wall',
    monsterChance: 0.3
  },

  roomD: {
    north: 'roomB',
    south: 'wall',
    east: 'wall',
    west: 'roomC',
    monsterChance: 0.5
  }
};
