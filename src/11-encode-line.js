/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const arrLen = arr.length;

  let countRepeat = 1;
  let result = '';

  for (let i = 0; i < arrLen; i++) {
    if (arr[i] === arr[i + 1]) {
      countRepeat++;
    } else {
      result += countRepeat > 1 ? `${countRepeat}${arr[i]}` : arr[i];
      countRepeat = 1;
    }
  }

  return result;
}

module.exports = encodeLine;
