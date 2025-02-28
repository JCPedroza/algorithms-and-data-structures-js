const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const listMakers = require('./linked-list.repo')

for (const { createList, id } of listMakers) {
  describe(`Linked List implementation ${id}`, () => {
    it('has length 0 when created', () => {
      const list = createList()
      assert.equal(list.length(), 0)
    })

    it('throws error if empty when first() is called', () => {
      const list = createList()
      assert.throws(() => list.first())
    })

    it('throws error if empty when at(0) is called', () => {
      const list = createList()
      assert.throws(() => list.at(0))
    })

    it('can insert at start of list', () => {
      const list = createList()

      list.insertStart('a')
      assert.equal(list.first(), 'a')

      list.insertStart('b')
      assert.equal(list.first(), 'b')

      list.insertStart('c')
      assert.equal(list.first(), 'c')

      assert.equal(list.at(0), 'c')
      assert.equal(list.at(1), 'b')
      assert.equal(list.at(2), 'a')
    })

    it('computes its length when not empty', () => {
      const list = createList()

      list.insertStart(true)
      assert.equal(list.length(), 1)

      list.insertStart(false)
      assert.equal(list.length(), 2)

      list.insertStart(true)
      assert.equal(list.length(), 3)
    })
  })
}
