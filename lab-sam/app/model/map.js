'use strict';

module.exports = {
  Foyer: {
    north: 'wall',
    east: 'wall',
    south: 'hallA',
    west: 'wall',
    foes: {name: 'Zombie', hp: 10, attack: 2, status: 'Hostal'},
    description: '',
    things: []
  },
  hallA: {
    north: 'Foyer',
    east: 'roomC',
    south: 'hallB',
    west: 'roomA',
    foes: {name: 'Zombie', hp: 10, attack: 2, status: 'Hostal'},
    description: 'The Hall is dark but for the torch in your hand. the stone floor looks like it has not been cleaned in centuries and the thick filth shows recent use. The hall continues South and turns left and there are doors to the East and West, North leads back to the Foyer',
    things: []
  },
  hallB: {
    north: 'hallA',
    east: 'hallC',
    south: 'roomD',
    west: 'wall',
    foes: [],
    description: 'The hall is longer than the last, about halfway down there is a jumble of rock and earth from an old caving that has been cleaned up just enough for one to pass. The hall looks to continue East past the cave in there is a sturdy wooden door to the South, the beginning of the Hall is to the North',
    things: []
  },
  hallC: {
    north: 'roomE',
    east: 'hallB',
    south: 'roomF',
    west: 'hallD',
    foes: [],
    description: 'The hall continues to the West where it turns right. There are doors to the North and South, the hall goes back to the enterance past the rock fall to the East',
    things: []
  },
  hallD: {
    north: 'hallC',
    east: 'roomG',
    south: 'barraks',
    west: 'roomH',
    foes: [],
    description: 'This Hall has two sputtering torches flanking a large rusted door at the end Hall to the South. There are two wooden doors one to the West and the other on the East',
    things: []
  },
  roomA: {
    north: 'wall',
    east: 'hallA',
    south: 'roomB',
    west: 'wall',
    foes: [],
    description: 'Behind the door is a large room filled with drifts of broken furniture and moldy trash, the dust and cobwebs imply that the room has not been touched in decades. However you do spot a doorway leading to a deeper room to the South',
    things: []
  },
  roomB: {
    north: 'roomA',
    east: 'wall',
    south: 'wall',
    west: 'wall',
    foes: [],
    description: 'This room is almost completely collapsed and has no exits but the doorway you entered from',
    things: []
  },
  roomC: {
    north: 'wall',
    east: 'wall',
    south: 'hallB',
    west: 'hallA',
    foes: {name: 'Zombie', hp: 10, attack: 2, status: 'Hostal'},
    description: 'The room looks like it was a study long ago, but before you can take in the rotting desk or collapsed bookshelves a shambling corpse raises from the corner and lurches towards you',
    things: []
  },
  roomD: {
    north: 'hallB',
    east: 'wall',
    south: 'wall',
    west: 'wall',
    foes: [],
    description: '',
    things: []
  },
  roomE: {
    north: 'wall',
    east: 'wall',
    south: 'hallC',
    west: 'wall',
    foes: [],
    description: '',
    things: []
  },
  roomF: {
    north: 'hallC',
    east: 'wall',
    south: 'wall',
    west: 'wall',
    foes: [],
    description: '',
    things: []
  },
  roomG: {
    north: 'wall',
    east: 'wall',
    south: 'wall',
    west: 'hallD',
    foes: [],
    description: '',
    things: []
  },
  roomH: {
    north: 'wall',
    east: 'hallD',
    south: 'wall',
    west: 'wall',
    foes: [],
    description: '',
    things: []
  },
  barraks: {
    north: 'hallD',
    east: 'wall',
    south: 'wall',
    west: 'wall',
    foes: [],
    description: '',
    things: []
  }
}
