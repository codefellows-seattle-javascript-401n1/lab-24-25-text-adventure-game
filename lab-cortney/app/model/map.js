'use strict';

module.exports = {
  foyer: {
    north: 'wall',
    south: 'wall',
    east: 'studio',
    west: 'wall',
    monsterChance: 0.2
  },
  studio: {
    north: 'wall',
    south: 'wall',
    east: 'wall',
    west: 'foyer',
    monsterChance: 0.5
  }
};
