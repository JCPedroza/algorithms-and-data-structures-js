/**
 * Builds the Fibonacci sequence using the recursive memoization pattern.
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number} length Length of the Fibonacci sequence.
 * @returns Fibonacci sequence of the specified length.
 */
const fibonacciSequence = (length) => {
  if (length === 0) return []
  if (length === 1) return [0n]

  const sequence = [0n, 1n]

  const fibo = (n) => {
    if (sequence[n] !== undefined) return sequence[n]
    sequence[n] = fibo(n - 1) + fibo(n - 2)
    return sequence[n]
  }

  fibo(length - 1)
  return sequence
}

module.exports = {
  fun: fibonacciSequence,
  id: 'recursive memoization'
}
