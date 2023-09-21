const assert = require('node:assert/strict')
const { describe, it } = require('node:test')
const algorithms = require('./os.repo')

algorithms.forEach(({ fun, id }) => {
  describe(`Object sanitization algorithm "${id}"`, () => {
    it('creates object containing whitelisted properties only', () => {
      const movie = { title: 'One', year: 1954, director: 'Tom' }

      assert.deepEqual(
        fun(movie, ['title', 'year']),
        { title: 'One', year: 1954 }
      )

      assert.deepEqual(
        fun({}, ['shape', 'color']),
        {}
      )

      assert.deepEqual(
        fun(movie, []),
        {}
      )

      // Original object must not be modified
      assert.deepEqual(
        movie,
        { title: 'One', year: 1954, director: 'Tom' }
      )
    })
  })
})
