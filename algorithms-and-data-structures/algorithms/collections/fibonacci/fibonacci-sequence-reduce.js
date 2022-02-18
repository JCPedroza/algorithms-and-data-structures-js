/**
 * Builds the Fibonacci sequence using the reduce pattern.
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number} length Length of the Fibonacci sequence.
 * @returns {number[]} Fibonacci sequence of the specified length.
 */
const fibonacciSequence = (length) => {
  const fibos = [0n, 1n]
  if (length < 2) return fibos.slice(0, length)

  return [...Array(length - 2).keys()].reduce(fibos => {
    fibos.push(fibos.at(-1) + fibos.at(-2))
    return fibos
  }, fibos)
}

module.exports = {
  algorithm: fibonacciSequence,
  id: 'reduce'
}
