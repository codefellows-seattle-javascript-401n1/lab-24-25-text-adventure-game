'use strict';

var monsterArray = ['CFTBL', 'godzilla', 'Them', 'Frankenstien'];

module.exports = function(){
  var arrayIndex = Math.floor(Math.random() * monsterArray.length);
  console.log('arrayIndex: ', arrayIndex);
  this.name = monsterArray[arrayIndex];
  console.log('monsterName: ', this.name);
  this.damage = Math.floor(Math.random() * 20) + 1;
};
