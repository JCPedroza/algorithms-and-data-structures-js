const testSubjects = [
  require('./largest-prime-factor-optimized'),
  require('./largest-prime-factor')
]

testSubjects.forEach(({ solution, id }) => {
  test(`"${id} solution" finds the largest prime factor`, () => {
    expect(solution(2)).toBe(2)
    expect(solution(7)).toBe(7)
    expect(solution(13_195)).toBe(29)
  })
})
