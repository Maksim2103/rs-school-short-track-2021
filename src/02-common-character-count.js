/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const makeArr = (str) => str.split('');
  const s1Set = makeArr(s1);
  const s2Set = makeArr(s2);

  return s1Set.reduce((acc, el) => {
    const position = s2Set.indexOf(el);
    const isHaveElementInS2 = position >= 0;
    if (isHaveElementInS2) {
      delete s2Set[position];
      return acc + 1;
    }
    return acc;
  }, 0);
}

module.exports = getCommonCharacterCount;
