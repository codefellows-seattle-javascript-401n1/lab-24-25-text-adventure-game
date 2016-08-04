'use strict';

module.exports = {
  roomA: {
    north: 'wall',
    south: 'corridor',
    east: 'roomB',
    west: 'wall'
  },

  roomB: {
    north: 'wall',
    south: 'corridor',
    east: 'wall',
    west: 'roomA'
  },

  roomC: {
    north: 'roomA',
    south: 'corridor',
    east: 'wall',
    west: 'roomD'
  },

  roomD: {
    north: 'roomB',
    south: 'corridor',
    east: 'roomC',
    west: 'wall'
  }
};
