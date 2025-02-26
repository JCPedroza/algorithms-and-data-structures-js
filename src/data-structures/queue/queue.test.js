const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const structures = require('./queue.repo')

const validateState = (queue, length, isEmpty, peek) => {
  assert.equal(queue.length, length)
  assert.equal(queue.isEmpty(), isEmpty)

  if (peek) {
    assert.equal(queue.peek(), peek)
  } else {
    assert.throws(() => queue.peek(), Error)
  }
}

structures.forEach(({ Struct, id }) => {
  describe(`Queue data structure "${id}"`, () => {
    it('performs basic queue operations', () => {
      const queue = new Struct()
      validateState(queue, 0, true)

      assert.equal(queue.enqueue('a'), queue)
      validateState(queue, 1, false, 'a')

      queue.enqueue('b').enqueue('c').enqueue('d')
      validateState(queue, 4, false, 'a')

      assert.equal(queue.dequeue(), 'a')
      validateState(queue, 3, false, 'b')

      assert.equal(queue.dequeue(), 'b')
      assert.equal(queue.dequeue(), 'c')
      assert.equal(queue.dequeue(), 'd')
      validateState(queue, 0, true)

      assert.throws(() => queue.peek(), Error)
      assert.throws(() => queue.dequeue(), Error)
      assert.throws(() => { queue.length = 5 }, Error)
    })
  })
})
