const testSubjects = [
  require('./largest-palindrome-product-naive.js'),
  require('./largest-palindrome-product-optimized.js')
]

testSubjects.forEach(({ solution, id }) => {
  describe(`Largest palindrome product algorithm "${id}"`, () => {
    it('finds the largest palindrome product of small numbers', () => {
      expect(solution(2)).toBe(9_009)
      expect(solution(3)).toBe(906_609)
    })
  })
})
