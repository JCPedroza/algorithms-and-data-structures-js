const testSubjects = [
  require('./even-fibo-while-noif-evenonly'),
  require('./even-fibo-while-noif'),
  require('./even-fibo-while')
]

testSubjects.forEach(({ solution, id }) => {
  test(`${id} calculates sum of even fibonacci numbers`, () => {
    expect(solution(-1)).toBe(0)
    expect(solution(0)).toBe(0)
    expect(solution(2)).toBe(2)
    expect(solution(10)).toBe(10)
    expect(solution(60)).toBe(44)
  })
})
