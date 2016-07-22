'use strict';

module.exports = function(arr) {
  if(arr.length === 0) return null;
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};
