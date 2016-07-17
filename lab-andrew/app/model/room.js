'use strict';

const MapController = require('../controller/map-controller');

module.exports = {
  roomA: {
    exit: MapController.prevLocation[0]
  },
  roomB: {
    entrance: MapController.prevLocation[0],
    north: MapController.door
  },
  roomC: {
    entrance: MapController.prevLocation[0],
    north: MapController.door,
    east: MapController.door
  },
  roomD: {
    entrance: MapController.prevLocation[0],
    north: MapController.door,
    east: MapController.door,
    west: MapController.door
  }
};
