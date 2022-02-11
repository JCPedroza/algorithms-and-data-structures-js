const testSubjects = [
  require('./smallest-multiple-naive')
]

testSubjects.forEach(({ solution, id }) => {
  describe(`Smallest multiple algorithm "${id}"`, () => {
    it('finds the smallest number divisible by all from 1 to n', () => {
      expect(solution(1)).toBe(1)
      expect(solution(2)).toBe(2)
      expect(solution(5)).toBe(60)
    })
  })
})
