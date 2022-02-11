const testSubjects = [
  require('./even-fibo-while-noif-evenonly'),
  require('./even-fibo-while-noif'),
  require('./even-fibo-while')
]

const runSuiteForSubject = ({ solution, id }) => {
  describe(`Even fibonacci algorithm "${id}"`, () => {
    it('sums even fibo numbers up to the given limit', () => {
      expect(solution(-1)).toBe(0)
      expect(solution(0)).toBe(0)
      expect(solution(2)).toBe(2)
      expect(solution(10)).toBe(10)
      expect(solution(60)).toBe(44)
    })
  })
}

testSubjects.forEach(runSuiteForSubject)
