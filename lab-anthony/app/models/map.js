'use strict';

module.exports = {
  roomA: {
    east: 'roomB',
    west: 'wall',
    monsterOdds: 0.3
  },
  roomB: {
    east: 'wall',
    west: 'roomA',
    monsterOdds: 0.4
  }
};
