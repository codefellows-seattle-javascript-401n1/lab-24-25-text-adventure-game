'use strict';

module.exports = {
  roomA: {
    North: 'wall',
    South: 'roomC',
    East: 'roomB',
    West: 'wall',
    monsterChance: 0.2
  },
  roomB: {
    North: 'wall',
    South: 'roomD',
    East: 'wall',
    West: 'roomA',
    monsterChance: 0.5
  },
  roomC: {
    North: 'roomA',
    South: 'wall',
    East: 'roomD',
    West: 'wall',
    monsterChance: 0.3
  },
  roomD: {
    North: 'roomB',
    South: 'wall',
    East: 'wall',
    West: 'roomC',
    monsterChance: 0.5
  }
};
