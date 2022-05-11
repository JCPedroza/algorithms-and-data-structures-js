const { join } = require('path')

const testSubjects = [
  require('./series-largest-product-naive')
]

const bigNumPath = join(__dirname, '/big-number.txt')

testSubjects.forEach(({ solution, id }) => {
  describe(`Solution for project euler problem "${id}"`, () => {
    it('computes the largest product in a series', () => {
      expect(solution(bigNumPath, 4)).toBe(5_832)
      expect(solution(bigNumPath, 13)).toBe(23_514_624_000)
    })
  })
})
