'use strict';

module.exports = {
  roomA: {
    south: 'roomC',
    east: 'roomB'
  },
  roomB: {
    south: 'roomD',
    west: 'roomA'

  },
  roomC: {
    north: 'roomA',
    east:  'roomD'

  },
  roomD: {
    north: 'roomB',
    west: 'roomC'
  }
};
