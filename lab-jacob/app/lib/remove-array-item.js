'use strict';

module.exports = function(array, value){
  var index = array.indexOf(value);
  if (index > -1) array.splice(index, 1);
};
