const testSubjects = [
  require('./sum-sqr-dif-floop'),
  require('./sum-sqr-dif-analytic')
]

testSubjects.forEach(({ solution, id }) => {
  describe(`Sum square diffrerence solution "${id}"`, () => {
    it('calculates the difference of the sums', () => {
      expect(solution(0)).toBe(0)
      expect(solution(1)).toBe(0)
      expect(solution(10)).toBe(2_640)
    })
  })
})
