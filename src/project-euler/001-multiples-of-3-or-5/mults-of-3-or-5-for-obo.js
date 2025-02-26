/**
 * Sum of multiples of 3 or 5 below 'limit'. Uses the for-loop accumulator
 * pattern and trial division. Iterates through natural numbers one by one.
 *
 * Time complexity: O(n)
 * Space complexity: O(1), the 64-bits IEEE 754 standard
 *
 * @param {number} limit Exclusive upper limit of the series.
 * @returns {number} Sum of multiples of 3 or 5 below 'limit'.
 */
const multiplesOf3Or5 = (limit) => {
  let sum = 0
  const limitFloor = Math.floor(limit)

  for (let natNum = 1; natNum < limitFloor; natNum++) {
    if (natNum % 3 === 0 || natNum % 5 === 0) {
      sum += natNum
    }
  }

  return sum
}

module.exports = {
  fun: multiplesOf3Or5,
  id: 'for-loop one-by-one'
}
