const testSubjects = [
  require('./fibonacci-sequence'),
  require('./fibonacci-sequence-rmemo')
]

testSubjects.forEach(({ id, fun }) => {
  const length = 10
  const testId = `${id} builds sequence of early Fibonacci numbers`
  const expectedOutput = [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n]

  const fiboTest = () => expect(fun(length)).toEqual(expectedOutput)

  test(testId, fiboTest)
})
