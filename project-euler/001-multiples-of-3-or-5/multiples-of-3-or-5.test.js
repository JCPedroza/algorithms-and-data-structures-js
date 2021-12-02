const testSubjects = [
  require('./multiples-of-3-or-5'),
  require('./multiples-of-3-or-5-reduce'),
  require('./multiples-of-3-or-5-analytic')
]

testSubjects.forEach(({ fun, id }) => {
  test(`${id} calculates sum of multiples of 3 or 5`, () => {
    expect(fun(50)).toBe(543)
    expect(fun(1000)).toBe(233_168)
  })
})
