const testSubjects = [
  require('./multiples-of-3-or-5-forloop'),
  require('./multiples-of-3-or-5-reduce'),
  require('./multiples-of-3-or-5-analytic')
]

testSubjects.forEach(({ solution, id }) => {
  describe(`Multiples of 3 or 5 solution "${id}"`, () => {
    it('sums the multiples of 3 or 5 below the given input', () => {
      expect(solution(-1)).toBe(0)
      expect(solution(0)).toBe(0)
      expect(solution(50)).toBe(543)
      expect(solution(100)).toBe(2_318)
    })
  })
})
