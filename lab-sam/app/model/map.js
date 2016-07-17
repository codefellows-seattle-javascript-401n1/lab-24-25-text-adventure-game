'use strict';

module.exports = {
  Foyer: {
    exits: {
      south: hallA
    },
    foes: [],
    things: []
  },
  hallA: {
    exits: {
      north: foyer,
      east: roomC,
      south: hallB,
      west: roomA
    },
    foes: [],
    things: []
  },
  hallB: {
    exits: {
      north: wall,
      east: hallC,
      south: roomD,
      west: hallA
    },
    foes: [],
    things: []
  },
  hallC: {
    exits: {
      north: roomE,
      east: hallB,
      south: roomF,
      west: hallD
    },
    foes: [],
    things: []
  },
  hallD: {
    exits: {
      north: hallC,
      east: roomG,
      south: barraks,
      west: roomH
    },
    foes: [],
    things: []
  },
  roomA: {
    exits: [],
    foes: [],
    things: []
  },
  roomB: {
    exits: {
      north: hallC,
      east: roomG,
      south: barraks,
      west: roomH
    },
    foes: [],
    things: []
  },
  roomC: {
    exits: {
      north: hallC,
      east: roomG,
      south: barraks,
      west: roomH
    },
    foes: [],
    things: []
  },
  roomD: {
    exits: {
      north: hallC,
      east: roomG,
      south: barraks,
      west: roomH
    },
    foes: [],
    things: []
  },
  roomE: {
    exits: {
      north: hallC,
      east: roomG,
      south: barraks,
      west: roomH
    },
    foes: [],
    things: []
  },
  roomF: {
    exits: {
      north: hallC,
      east: roomG,
      south: barraks,
      west: roomH
    },
    foes: [],
    things: []
  },
  roomG: {
    exits: {
      north: hallC,
      east: roomG,
      south: barraks,
      west: roomH
    },
    foes: [],
    things: []
  },
  roomH: {
    exits: {
      north: hallC,
      east: roomG,
      south: barraks,
      west: roomH
    },
    foes: [],
    things: []
  },
}
