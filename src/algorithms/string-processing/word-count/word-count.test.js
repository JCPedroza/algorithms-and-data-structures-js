const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const algorithms = require('./word-count.repo')

const complexStr = `One two.three : four
five! six? seven,  eight  ;
nine ten!?? ,.! . `

const weirdStr = '?! .. ;:  ? ,  '

algorithms.forEach(({ fun, id }) => {
  describe(`Word count algorithm "${id}"`, () => {
    it('counts the words inside a string', () => {
      assert.equal(fun(''), 0)
      assert.equal(fun(weirdStr), 0)

      assert.equal(fun('one'), 1)
      assert.equal(fun(complexStr), 10)
    })
  })
})
