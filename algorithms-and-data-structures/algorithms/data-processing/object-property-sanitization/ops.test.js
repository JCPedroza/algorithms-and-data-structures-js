const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const algorithms = require('./ops.repo')

algorithms.forEach(({ fun, id }) => {
  describe(`Object sanitization fun "${id}"`, () => {
    it('sanitizes object properties according to a whitelist', () => {
      const movie = { title: 'One', year: 1954, director: 'Tom' }
      const movieWhitelist = ['title', 'year']

      assert.deepEqual(fun(movie, movieWhitelist), { title: 'One', year: 1954 })
      assert.deepEqual(fun({}, movieWhitelist), {})
      assert.deepEqual(fun(movie, []), {})

      // Original object must not be modified
      assert.deepEqual(movie, { title: 'One', year: 1954, director: 'Tom' })
    })
  })
})
