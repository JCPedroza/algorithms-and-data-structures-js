const fibonacciSequence = (length) => {
  const sequence = [0n, 1n]

  for (let index = 2; index < length; index++) {
    sequence.push(sequence.at(-1) + sequence.at(-2))
  }

  return sequence
}

module.exports = {
  fun: fibonacciSequence,
  id: 'for-loop accumulator'
}
