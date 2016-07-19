'use strict';

module.exports = function(arr) {
  if (!Array.isArray(arr)) throw new TypeError(('No Array Passed Into Module'));
  if (arr.length === 0) return null;

  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};
