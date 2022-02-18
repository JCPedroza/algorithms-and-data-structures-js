const testSubjects = [
  require('./ops-assign-proxy'),
  require('./ops-entries-filter-map'),
  require('./ops-filter-reduce'),
  require('./ops-for-each'),
  require('./ops-reduce')
]

testSubjects.forEach(({ algorithm, id }) => {
  describe(`Object sanitization algorithm "${id}"`, () => {
    it('sanitizes object properties according to a whitelist', () => {
      const movie = { title: 'One', year: 1954, director: 'Tom' }
      const movieWhitelist = ['title', 'year']

      expect(algorithm(movie, movieWhitelist)).toEqual({ title: 'One', year: 1954 })
      expect(algorithm({}, movieWhitelist)).toEqual({})
      expect(algorithm(movie, [])).toEqual({})

      // Original object must not be modified
      expect(movie).toEqual({ title: 'One', year: 1954, director: 'Tom' })
    })
  })
})
