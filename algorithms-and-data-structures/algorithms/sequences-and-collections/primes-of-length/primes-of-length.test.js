const testSubjects = [
  require('./primes-of-length-naive')
]

testSubjects.forEach(({ algorithm, id }) => {
  describe(`Prime numbers algorithm "${id}"`, () => {
    it('builds an array of the first n prime numbers', () => {
      expect(algorithm(0)).toEqual([])
      expect(algorithm(1)).toEqual([2])
      expect(algorithm(2)).toEqual([2, 3])
      expect(algorithm(7)).toEqual([2, 3, 5, 7, 11, 13, 17])
    })
  })
})
