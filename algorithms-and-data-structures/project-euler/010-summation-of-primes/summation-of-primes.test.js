const testSubjects = [
  require('./summation-of-primes-sieve')
]

testSubjects.forEach(({ solution, id }) => {
  describe(`Project euler solution "${id}"`, () => {
    it('computes the sum of prime numbers below a given number', () => {
      expect(solution(-1)).toBe(0)
      expect(solution(0)).toBe(0)
      expect(solution(10)).toBe(17)
      expect(solution(17)).toBe(41)
    })

    it('throws an error when called with non-numeric argument', () => {
      expect(() => solution()).toThrow('Argument must be a number')
      expect(() => solution(true)).toThrow('Argument must be a number')
      expect(() => solution('ca')).toThrow('Argument must be a number')
    })
  })
})
