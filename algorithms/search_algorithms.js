'use strict'

const linearSearch = function(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

const binarySearch = function(array, value) {
  let lo = 1;
  let hi = array.length;

  while (lo <= hi) {
    let mid = Math.floor( (lo + (hi-lo))/2)
    if (mid === value) {
      return mid
    } else if (mid < target) {
      lo = (mid + 1)
      return lo
    } else {
      hi = (mid - 1)
      return hi
    }
   }
}

module.exports = { linearSearch, binarySearch };
