'use strict';

module.exports = {
  microsoft: {
    north: 'wall',
    south: 'facebook',
    east: 'amazon',
    west: 'wall',
    monsterChance: 0.2
  },
  amazon: {
    north: 'wall',
    south: 'google',
    east: 'wall',
    west: 'microsoft',
    monsterChance: 0.5
  },
  facebook: {
    north: 'microsoft',
    south: 'wall',
    east: 'google',
    west: 'wall',
    monsterChance: 0.3
  },
  google: {
    north: 'facebook',
    south: 'wall',
    east: 'wall',
    west: 'amazon',
    monsterChance: 0.5
  }
};
