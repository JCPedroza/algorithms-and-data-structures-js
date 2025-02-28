const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const structures = require('./priority-queue.repo')

/**
 * Validate de state of a priority queue.
 *
 * @param {*} pqueue Priority queue to validate.
 * @param {number} length Expected length.
 * @param {boolean} isEmpty Expected emptyness.
 * @param {number?} peek Expected peek value.
 */
const validateState = (pqueue, length, isEmpty, peek = null) => {
  assert.equal(pqueue.length, length)
  assert.equal(pqueue.isEmpty(), isEmpty)

  if (peek) {
    assert.equal(pqueue.peek(), peek)
  } else {
    assert.throws(() => pqueue.peek(), Error)
  }
}

for (const { Struct, id } of structures) {
  describe(`Priority queue implementation "${id}"`, () => {
    it('performs basic priority queue operations', () => {
      const pqueue = new Struct()
      validateState(pqueue, 0, true)

      assert.equal(pqueue.enqueue(-10), pqueue)
      validateState(pqueue, 1, false, -10)

      pqueue.enqueue(10).enqueue(-20).enqueue(20)
      validateState(pqueue, 4, false, -20)

      assert.equal(pqueue.dequeue(), -20)
      validateState(pqueue, 3, false, -10)

      assert.equal(pqueue.dequeue(), -10)
      assert.equal(pqueue.dequeue(), 10)
      assert.equal(pqueue.dequeue(), 20)
      validateState(pqueue, 0, true)

      assert.throws(() => pqueue.dequeue(), Error)
    })
  })
}
