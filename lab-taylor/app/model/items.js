'use strict';

const items = ['An Emmy Award', 'Ray Gun', 'Hockey Mask', 'Pot of Gold'];
const randomArrayItem = require('../lib/random-array-item');

module.exports = function() {
  this.name = randomArrayItem(items);
};
