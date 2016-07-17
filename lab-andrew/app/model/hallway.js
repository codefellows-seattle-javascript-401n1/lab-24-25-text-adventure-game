'use strict';

const MapController = require('../controller/map-controller');

module.exports = {
  hallA: {
    entrance: MapController.prevLocation[0],
    exit: MapController.door
  },
  hallB: {
    entrance: MapController.prevLocation[0],
    firstLeft: MapController.door
  },
  hallC: {
    entrance: MapController.prevLocation[0],
    exit: MapController.door,
    firstLeft: MapController.door,
    secondLeft: MapController.door
  },
  hallD: {
    entrance: MapController.prevLocation[0],
    exit: MapController.door,
    firstLeft: MapController.door,
    secondLeft: MapController.door,
    firstRight: MapController.door
  },
  hallE: {
    entrance: MapController.prevLocation[0],
    exit: MapController.door,
    firstLeft: MapController.door,
    secondLeft: MapController.door,
    firstRight: MapController.door,
    secondRight: MapController.door
  }
};
