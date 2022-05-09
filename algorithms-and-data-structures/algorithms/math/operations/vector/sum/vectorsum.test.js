const testSubjects = [
  require('./vectorsum-forloop'),
  require('./vectorsum-reduce'),
  require('./vectorsum-recursive'),
  require('./vectorsum-tail')
]

testSubjects.forEach(({ algorithm, id }) => {
  describe(`Vectorsum algorithm "${id}"`, () => {
    it('computes the sum of all the numbers in an array', () => {
      expect(algorithm([])).toBe(0)
      expect(algorithm([3.7, 2.9, -4.72, 10.97, -21.72])).toBeCloseTo(-8.87)
    })
  })
})
