'use strict';

var itemArray = ['sling shot', 'water pistol', 'newspaper', 'umbrella', 'mirror'];

module.exports = function (){
  var arrayIndex = Math.floor(Math.random() * itemArray.length);
  this.name = itemArray[arrayIndex];
  this.hp = Math.floor(Math.random() * 20) + 1;
}
