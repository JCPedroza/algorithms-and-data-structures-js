const testSubjects = [
  require('./multiples-of-3-or-5-forloop'),
  require('./multiples-of-3-or-5-reduce'),
  require('./multiples-of-3-or-5-analytic')
]

testSubjects.forEach(({ solution, id }) => {
  describe(`Multiples of 3 or 5 algorithm "${id}"`, () => {
    it('sums the multiples of 3 or 5 below the input', () => {
      expect(solution(50)).toBe(543)
      expect(solution(100)).toBe(2_318)
    })
  })
})
