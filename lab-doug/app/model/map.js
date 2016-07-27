'use strict';

module.exports = {
  roomA: {
    south: 'roomC',
    east: 'roomB',
    monsterProbability: 0.6
  },
  roomB: {
    south: 'roomD',
    west: 'roomA',
    monsterProbability: 0.75

  },
  roomC: {
    north: 'roomA',
    east:  'roomD',
    monsterProbability: 0.98

  },
  roomD: {
    north: 'roomB',
    west: 'roomC',
    monsterProbability: 0.45
  }
};
