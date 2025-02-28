/**
 * Builds the Fibonacci sequence using the for-loop accumulator pattern.
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number} length Length of the Fibonacci sequence.
 * @returns {bigint[]} Fibonacci sequence of the specified length.
 */
const fibonacciSequence = (length) => {
  if (length === 0) return []
  if (length === 1) return [0n]

  const sequence = [0n, 1n]

  for (let index = 2; index < length; index++) {
    const idxMinOne = sequence.at(-1) ?? 0n
    const idxMinTwo = sequence.at(-2) ?? 0n
    sequence.push(idxMinOne + idxMinTwo)
  }

  return sequence
}

module.exports = {
  fun: fibonacciSequence,
  id: 'for-loop accumulator'
}
