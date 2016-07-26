'use strict';

const monsterArray = ['CFTBL', 'godzilla', 'Them', 'Frankenstien'];

module.exports = function(){
  var arrayIndex = Math.floor(Math.random() * monsterArray.length);
  this.name = monsterArray[arrayIndex];
  this.damage = Math.floor(Math.random() * 20) + 1;
};
