const testSubjects = [
  require('./primes-up-to-naive'),
  require('./primes-up-to-sieve')
]

testSubjects.forEach(({ algorithm, id }) => {
  describe(`Primes-up-to algorithm "${id}"`, () => {
    it('calculates all prime numbers up to a given number', () => {
      expect(algorithm(1)).toEqual([])
      expect(algorithm(11)).toEqual([2, 3, 5, 7, 11])
    })
  })
})
