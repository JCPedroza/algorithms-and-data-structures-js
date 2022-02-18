const testSubjects = [
  require('./binary-search'),
  require('./binary-search-recursive')
]

testSubjects.forEach(({ algorithm, id }) => {
  describe(`Binary search algorithm "${id}"`, () => {
    it('finds value in array', () => {
      expect(algorithm([0, 1, 2, 3, 4], 2)).toBe(2)
      expect(algorithm([0, 1, 2, 3, 4], 0)).toBe(0)
      expect(algorithm([0, 1, 2, 3, 4], 4)).toBe(4)
      expect(algorithm([0, 1, 2, 3, 4], 5)).toBe(-1)
    })
  })
})
