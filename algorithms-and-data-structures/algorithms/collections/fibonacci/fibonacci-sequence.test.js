const testSubjects = [
  require('./fibonacci-sequence'),
  require('./fibonacci-sequence-rmemo')
]

// Test for lengths 0 and 1
testSubjects.forEach(({ algorithm, id }) => {
  const testLengthZero = () => expect(algorithm(0)).toEqual([])
  const testLengthOne = () => expect(algorithm(1)).toEqual([0n])

  test(`${id} builds Fibonacci sequence of length 0`, testLengthZero)
  test(`${id} builds Fibonacci sequence of length 1`, testLengthOne)
})

// Test for length 10
testSubjects.forEach(({ id, algorithm }) => {
  const length = 10
  const expectedOutput = [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n]

  const testLengthTen = () => expect(algorithm(length)).toEqual(expectedOutput)

  test(`${id} builds Fibonacci sequence of length ${length}`, testLengthTen)
})

// TODO: deal with inputs: negative, undefined, float, no numeric
