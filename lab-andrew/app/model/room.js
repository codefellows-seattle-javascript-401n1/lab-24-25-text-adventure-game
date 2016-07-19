'use strict';

const Map = require('../controller/map');

module.exports = {
  roomA: {
    exit: Map.prevLocation[0],
  },
  roomB: {
    entrance: Map.prevLocation[0],
    north: Map.door,
  },
  roomC: {
    entrance: Map.prevLocation[0],
    north: Map.door,
    east: Map.door,
  },
  roomD: {
    entrance: Map.prevLocation[0],
    north: Map.door,
    east: Map.door,
    west: Map.door,
  }
};
