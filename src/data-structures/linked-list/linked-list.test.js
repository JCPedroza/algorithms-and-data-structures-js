const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const structures = require('./linked-list.repo')

const validateState = (list, head, tail, length, isEmpty, arrayVersion) => {
  if (head) {
    assert.equal(list.head.data, head)
  } else {
    assert.equal(list.head, null)
  }

  if (tail) {
    assert.equal(list.tail.data, tail)
  } else {
    assert.equal(list.tail, null)
  }

  assert.equal(list.length, length)
  assert.equal(list.isEmpty(), isEmpty)
  assert.deepEqual(list.toArray(), arrayVersion)
}

structures.forEach(({ Struct, id }) => {
  describe(`Linked list implementation "${id}"`, () => {
    it('performs basic linked list operations', () => {
      // List initialization
      const list = new Struct()
      validateState(list, null, null, 0, true, [])

      // Insert items using head and tail methods
      list.insertAtHead('a')
      list.insertAtTail('c')
      validateState(list, 'a', 'c', 2, false, ['a', 'c'])

      // Insert items using index method
      list.insertAtIndex(1, 'b')
      list.insertAtIndex(0, 'x')
      validateState(list, 'x', 'c', 4, false, ['x', 'a', 'b', 'c'])

      // Insert items using node methods
      list.insertBeforeNode(list.getNodeAtIndex(0), 'z')
      list.insertAfterNode(list.getNodeAtIndex(list.length - 1), 'o')
      validateState(list, 'z', 'o', 6, false, ['z', 'x', 'a', 'b', 'c', 'o'])

      // Access with .at() method
      assert.equal(list.at(-1), 'o')
      assert.equal(list.at(-2), 'c')
      assert.equal(list.at(0), 'z')
      assert.equal(list.at(1), 'x')

      // Throw exceptions with invalid indexes
      assert.throws(() => list.getNodeAtIndex(-1), Error)
      assert.throws(() => list.getNodeAtIndex(6), Error)
      assert.throws(() => list.at(-7), Error)
      assert.throws(() => list.at(6), Error)

      // Remove nodes
      list.deleteNode(list.getNodeAtIndex(3))
      list.deleteNodeAtIndex(2)
      validateState(list, 'z', 'o', 4, false, ['z', 'x', 'c', 'o'])

      // Destroy list
      list.destroy()
      validateState(list, null, null, 0, true, [])
    })
  })
})
