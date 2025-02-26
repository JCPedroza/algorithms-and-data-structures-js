/**
 * Sum of multiples of 3 or 5 below 'limit'. Uses the while-loop accumulator
 * pattern and trial division. Iterates through multiples only.
 *
 * Time complexity: O(n)
 * Space complexity: O(1), the 64-bits IEEE 754 standard
 *
 * @param {number} limit Exclusive upper limit of the series.
 * @returns {number} Sum of multiples of 3 or 5 below 'limit'.
 */
const sumMultsOf3Or5 = (limit) => {
  const limitFloor = Math.floor(limit)
  let mult3 = 3
  let mult5 = 5
  let sum = 0

  // Sum multiples of 3 and multiples of 5 that are not multiples of 3.
  while (mult5 < limitFloor) {
    sum += mult3
    if (mult5 % 3 !== 0) sum += mult5 // Avoid counting multiples of both twice

    mult3 += 3
    mult5 += 5
  }

  // Sum remaining multiples of 3.
  while (mult3 < limitFloor) {
    sum += mult3
    mult3 += 3
  }

  return sum
}

module.exports = {
  fun: sumMultsOf3Or5,
  id: 'while-loop multiples-only'
}
