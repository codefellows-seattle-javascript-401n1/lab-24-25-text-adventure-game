'use strict';

module.exports = {
  Foyer: {
    north: 'wall',
    east: 'wall',
    south: 'hallA',
    west: 'wall',
    description: 'The road having been washed away a sudden storm you are forced to find shelter in a  cave just beyond the swollen river banks. Just beyond the cave entrance you finds a grand stone doorway, the intricately carved face worn smooth by time and weather. Overcome by curiosity you light a torch and push the giant stone door. With a small grinding sound the door swings open far easier than you anticipated revealing a large foyer partially collapsed to the left, the bare stone floor scattered with dirt and leaves. The only exit to the South',
    things: []
  },
  hallA: {
    north: 'Foyer',
    east: 'roomC',
    south: 'hallB',
    west: 'roomA',
    foes: {name: 'Zombie', hp: 10, attack: 2, status: 'Hostal'},
    description: 'The Hall is dark but for the torch in your hand. the stone floor looks like it has not been cleaned in centuries and but the thick filth shows recent passage. The hall continues South and turns left and there are doors to the East and West, North leads back to the Foyer',
    things: []
  },
  hallB: {
    north: 'hallA',
    east: 'hallC',
    south: 'roomD',
    west: 'wall',
    description: 'The hall is longer than the last, about halfway down there is a jumble of rock and earth from an old cave in that has been cleaned up just enough for one person to squeeze past. The hall looks to continue East past the cave in there is a sturdy wooden door to the South, the beginning of the Hall is to the North'
  },
  hallC: {
    north: 'roomE',
    east: 'hallB',
    south: 'roomF',
    west: 'hallD',
    description: 'The hall continues to the West where it turns right. There are doors to the North and South, the hall goes back to the enterance past the rock fall to the East'
  },
  hallD: {
    north: 'hallC',
    east: 'wall',
    south: 'barraks',
    west: 'wall',
    description: 'This Hall has two sputtering torches flanking a large rusted door at the end Hall to the South. There are no other doors'
  },
  roomA: {
    north: 'wall',
    east: 'hallA',
    south: 'roomB',
    west: 'wall',
    description: 'Behind the door is a large room filled with drifts of broken furniture and moldy trash, the dust and cobwebs imply that the room has not been touched in decades. However you do spot a doorway leading to a deeper room to the South',
    things: ['Wooden club']
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
    description: 'The room looks like it was a study long ago, before you is a rotting desk backed by long collapsed bookshelves, their contents long since turned to dust',
    things: []
  },
  roomD: {
    north: 'hallB',
    east: 'wall',
    south: 'wall',
    west: 'wall',
    foes: [],
    description: 'This room is empty, bare stone walls and a dust covered floor are all you can make out by the dim torch light',
    things: []
  },
  roomE: {
    north: 'wall',
    east: 'wall',
    south: 'hallC',
    west: 'wall',
    foes: [],
    description: 'The room before you holds the first sign of life you have seen since opening the doorway. The space looks like an improvised storage room, relatively new boxes and crates line the walls and are stacked 3 or 4 deep. Most of the boxes look empty, some have beem broken down and the wood planks stacked in a corner, some contain basic food, others tools, one even holds weapons.',
    things: ['longsword']
  },
  roomF: {
    north: 'hallC',
    east: 'wall',
    south: 'wall',
    west: 'wall',
    foes: {name: 'Giant Spider', hp: 30, attack: 5, status: 'Hostal'},
    description: 'This room is large and from the rotting remains of three long table you suspect it was once a dinning hall. The tipped and broken tables are covered in what looks like thick cobwebs, That same stuff coats several of the walls as well.',
    things: []

  },
  barraks: {
    north: 'hallD',
    east: 'wall',
    south: 'wall',
    west: 'wall',
    foes: [],
    description: 'The large Rusted door gives way to a well lite room larger than any other you have seen thus far. centered in the far wall looks to be some kind or alter or shrine of black stone piled high with lit candles surrounding a massive animal skull of some kind',
    things: []
  }
};
