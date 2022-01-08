/**
 * Converts a number into its equivalent fizz-buzz string.
 * @param {number} num Number to convert.
 * @returns {string} Fizz-buzz string equivalent to input number.
 */
const numToFizzBuzz = (num) => {
  let fizzBuzz = ''
  if (num % 3 === 0) fizzBuzz += 'fizz'
  if (num % 5 === 0) fizzBuzz += 'buzz'
  return fizzBuzz || String(num)
}

/**
 * Generates a sequence of fizz-buzz strings.
 * @param {number} from Start of the sequence.
 * @param {number} to End of the sequence (inclusive).
 * @returns {string[]} Sequence of fizz-buzz strings.
 */
const fizzBuzzRange = (from, to) => {
  const sequence = []

  for (let num = from; num <= to; num++) {
    sequence.push(numToFizzBuzz(num))
  }

  return sequence
}

module.exports = {
  algorithm: fizzBuzzRange,
  id: 'for loop accumulator'
}
