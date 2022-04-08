const testSubjects = [
  require('./prime-trial-division'),
  require('./prime-sieve')
]

testSubjects.forEach(({ solution, id }) => {
  describe(`Prime number solution "${id}"`, () => {
    it('computes the nth prime number', () => {
      expect(solution(1)).toBe(2)
      expect(solution(2)).toBe(3)
      expect(solution(3)).toBe(5)
      expect(solution(4)).toBe(7)
      expect(solution(5)).toBe(11)
    })

    it('throws error for invalid indexes', () => {
      expect(() => solution(0)).toThrow('Invalid index')
      expect(() => solution(-1)).toThrow('Invalid index')
      expect(() => solution()).toThrow('Invalid index')
    })
  })
})
