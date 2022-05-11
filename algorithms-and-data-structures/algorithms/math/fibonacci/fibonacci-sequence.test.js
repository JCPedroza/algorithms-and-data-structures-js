const testSubjects = [
  require('./fibonacci-sequence-floop'),
  require('./fibonacci-sequence-rmemo'),
  require('./fibonacci-sequence-reduce')
]

testSubjects.forEach(({ algorithm, id }) => {
  describe(`Fibonacci sequence algorithm "${id}"`, () => {
    it('builds the Fibonacci sequence of the given length', () => {
      expect(algorithm(0)).toEqual([])
      expect(algorithm(1)).toEqual([0n])
      expect(algorithm(2)).toEqual([0n, 1n])

      expect(algorithm(10))
        .toEqual([0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n])
    })
  })
})
