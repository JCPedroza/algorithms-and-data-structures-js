const testSubjects = [
  require('./largest-prime-factor-optimized'),
  require('./largest-prime-factor')
]

testSubjects.forEach(({ solution, id }) => {
  describe(`Largest prime factor algorithm "${id}"`, () => {
    it('finds the largest prime factor of a number', () => {
      expect(solution(2)).toBe(2)
      expect(solution(7)).toBe(7)
      expect(solution(154)).toBe(11)
    })
  })
})
