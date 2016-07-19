'use strict';

const Map = require('../controller/map');

module.exports = {
  hallA: {
    entrance: Map.prevLocation[0],
    exit: Map.door,
  },
  hallB: {
    entrance: Map.prevLocation[0],
    firstLeft: Map.door,
  },
  hallC: {
    entrance: Map.prevLocation[0],
    exit: Map.door,
    firstLeft: Map.door,
    secondLeft: Map.door,
  },
  hallD: {
    entrance: Map.prevLocation[0],
    exit: Map.door,
    firstLeft: Map.door,
    secondLeft: Map.door,
    firstRight: Map.door,
  },
  hallE: {
    entrance: Map.prevLocation[0],
    exit: Map.door,
    firstLeft: Map.door,
    secondLeft: Map.door,
    firstRight: Map.door,
    secondRight: Map.door,
  }
};
