const testSubjects = [
  require('./binary-search'),
  require('./binary-search-recursive')
]

for (const { algorithm, id } of testSubjects) {
  test(`"${id}" finds index of item in array`, () => {
    expect(algorithm([0, 1, 2, 3, 4], 2)).toBe(2)
    expect(algorithm([0, 1, 2, 3, 4], 0)).toBe(0)
    expect(algorithm([0, 1, 2, 3, 4], 4)).toBe(4)
    expect(algorithm([0, 1, 2, 3, 4], 5)).toBe(-1)
  })
}
