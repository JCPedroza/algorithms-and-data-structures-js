/**
 * Generates a sequence of fizz-buzz strings.
 * Time complexity: O(n).
 * Space complexity: O(n).
 * @param {number} from Start of the sequence.
 * @param {number} to End of the sequence (inclusive).
 * @returns {string[]} Sequence of fizz-buzz strings.
 */
const fizzBuzzRange = (from, to) => {
  const fbrange = (current, range) => {
    if (current > to) return range

    let fb = ''
    if (current % 3 === 0) fb += 'fizz'
    if (current % 5 === 0) fb += 'buzz'
    range.push(fb || String(current))

    return fbrange(current + 1, range)
  }

  return fbrange(from, [])
}

module.exports = {
  algorithm: fizzBuzzRange,
  id: 'recursive'
}
