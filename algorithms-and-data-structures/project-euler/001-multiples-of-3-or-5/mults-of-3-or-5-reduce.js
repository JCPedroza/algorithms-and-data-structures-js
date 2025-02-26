/**
 * Sum of multiples of 3 or 5 below 'limit'. Uses the filter-reduce pattern.
 *
 * Time complexity: O(n)
 * Space complexity: O(n), the length of the range array
 *
 * @param {number} limit Exclusive upper limit of the series.
 * @returns {number} Sum of multiples of 3 or 5 below 'limit'.
 */
const multiplesOf3Or5 = (limit) => {
  if (limit < 0) return 0

  return [...Array(Math.floor(limit)).keys()] // Array of non-negative integers
    .filter(intNum => intNum % 3 === 0 || intNum % 5 === 0)
    .reduce((sum, intNum) => sum + intNum, 0)
}

module.exports = {
  fun: multiplesOf3Or5,
  id: 'filter-reduce'
}
