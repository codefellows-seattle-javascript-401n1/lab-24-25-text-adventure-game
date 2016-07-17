'use strict';

const MapController = require('../controller/map-controller');

module.exports = {
  roomA: {
    exit: MapController.prevLocation
  },
  roomB: {
    entrance: MapController.prevLocation,
    north: MapController.door
  },
  roomC: {
    entrance: MapController.prevLocation,
    north: MapController.door,
    east: MapController.door
  },
  roomD: {
    entrance: MapController.prevLocation,
    north: MapController.door,
    east: MapController.door,
    west: MapController.door
  }
};
