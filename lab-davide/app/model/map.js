'use strict';

//use default map view for lab, customize later//
module.exports = {
  roomA: {
    north: 'wall',
    south: 'roomC',
    east: 'roomB',
    west: 'wall'
  },

  roomB: {
    north: 'wall',
    south: 'roomD',
    east: 'wall',
    west: 'roomA'
  },

  roomC: {
    north: 'roomA',
    south: 'wall',
    east: 'roomD',
    west: 'wall'
  },

  roomD: {
    north: 'roomB',
    south: 'wall',
    east: 'wall',
    west: 'roomC'
  }
};
