/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const mapResult = domains.reduce((acc, el) => {
    const arr = el.split('.').reverse();
    arr.forEach((_, index, array) => {
      const key = `.${array.slice(0, index + 1).join('.')}`;
      if (acc[key]) {
        acc[key]++;
      } else {
        acc[key] = 1;
      }
    });

    return acc;
  }, {});

  return mapResult;
}

module.exports = getDNSStats;
