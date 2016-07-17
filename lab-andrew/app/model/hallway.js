'use strict';

const MapController = require('../controller/map-controller');

module.exports = {
  hallA: {
    entrance: MapController.prevLocation,
    exit: MapController.door
  },
  hallB: {
    entrance: MapController.prevLocation,
    firstLeft: MapController.door
  },
  hallC: {
    entrance: MapController.prevLocation,
    exit: MapController.door,
    firstLeft: MapController.door,
    secondLeft: MapController.door
  },
  hallD: {
    entrance: MapController.prevLocation,
    exit: MapController.door,
    firstLeft: MapController.door,
    secondLeft: MapController.door,
    firstRight: MapController.door
  },
  hallE: {
    entrance: MapController.prevLocation,
    exit: MapController.door,
    firstLeft: MapController.door,
    secondLeft: MapController.door,
    firstRight: MapController.door,
    secondRight: MapController.door
  }
};
