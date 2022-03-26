const testSubjects = [
  require('./reverse-array-swap'),
  require('./reverse-array-native')
]

testSubjects.forEach(({ algorithm, id }) => {
  describe(`Reverse array algorithm "${id}"`, () => {
    it('reverses order of array items', () => {
      expect(algorithm([])).toEqual([])
      expect(algorithm([1])).toEqual([1])
      expect(algorithm([1, 2, 3])).toEqual([3, 2, 1])
      expect(algorithm(['a', 'b', 'c', 'd'])).toEqual(['d', 'c', 'b', 'a'])

      expect(() => algorithm()).toThrow()
    })
  })
})
