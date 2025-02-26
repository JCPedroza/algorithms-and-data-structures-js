const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const algorithms = require('./fizz-buzz.repo')

algorithms.forEach(({ algorithm, id }) => {
  describe(`Fizz-buzz range algorithm "${id}"`, () => {
    it('creates an array of fizz-buzz strings in the given range', () => {
      assert.deepEqual(
        algorithm(12, 20),
        ['fizz', '13', '14', 'fizzbuzz', '16', '17', 'fizz', '19', 'buzz']
      )

      assert.deepEqual(
        algorithm(-5, 3),
        ['buzz', '-4', 'fizz', '-2', '-1', 'fizzbuzz', '1', '2', 'fizz']
      )

      assert.deepEqual(
        algorithm(0, 0),
        ['fizzbuzz']
      )
    })
  })
})
