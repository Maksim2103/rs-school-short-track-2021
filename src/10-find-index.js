/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let middleIndex;

  while (firstIndex <= lastIndex) {
    middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    if (array[middleIndex] > value) {
      lastIndex = middleIndex - 1;
    }
    if (array[middleIndex] < value) {
      firstIndex = middleIndex + 1;
    }
    if (array[middleIndex] === value) {
      return middleIndex;
    }
  }
  return middleIndex;
}

module.exports = findIndex;
