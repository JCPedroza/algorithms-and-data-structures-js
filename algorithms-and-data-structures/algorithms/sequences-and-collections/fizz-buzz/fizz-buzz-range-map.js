/**
 * Generates a sequence of fizz-buzz strings.
 * @param {number} from Start of the sequence.
 * @param {number} to End of the sequence (inclusive).
 * @returns {string[]} Sequence of fizz-buzz strings.
 */
const fizzBuzzRange = (from, to) =>
  [...Array(to - from + 1).keys()].map(index => {
    const num = index + from
    let fizzBuzz = ''
    if (num % 3 === 0) fizzBuzz += 'fizz'
    if (num % 5 === 0) fizzBuzz += 'buzz'
    return fizzBuzz || String(num)
  })

module.exports = {
  algorithm: fizzBuzzRange,
  id: 'map'
}
