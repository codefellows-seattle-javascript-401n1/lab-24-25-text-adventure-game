'use strict';

module.exprts = function(array) {
  if (array.length === 0) return null;
  let index = Math.floor(Math.random () * array.length);
  return array[index];

};
