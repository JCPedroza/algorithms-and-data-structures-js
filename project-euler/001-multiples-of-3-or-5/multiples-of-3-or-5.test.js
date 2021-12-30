const testSubjects = [
  require('./multiples-of-3-or-5-forloop'),
  require('./multiples-of-3-or-5-reduce'),
  require('./multiples-of-3-or-5-analytic')
]

testSubjects.forEach(({ solution, id }) => {
  test(`${id} calculates sum of multiples of 3 or 5`, () => {
    expect(solution(50)).toBe(543)
    expect(solution(1000)).toBe(233_168)
  })
})
