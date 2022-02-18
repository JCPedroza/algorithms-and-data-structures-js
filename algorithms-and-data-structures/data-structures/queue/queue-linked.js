const { Structure: LinkedList } = require('../linked-list/linked-list-double')

/**
 * Implements a queue using a doubly linked list as underlying data structure.
 */
class Queue {
  constructor () {
    this._dataList = new LinkedList()
  }

  /**
   * Get the number of items in the queue.
   */
  get length () {
    return this._dataList.length
  }

  /**
   * The length property cannot be directly set.
   */
  set length (_) {
    throw new Error(`Cannot set length property, input was ${_}`)
  }

  /**
   * Check if the queue is empty.
   * Time complexity: O(1).
   * @returns {boolean} True if queue is empty, false otherwise.
   */
  isEmpty () {
    return this.length === 0
  }

  /**
   * Access the data at the front of the queue.
   * Time complexity: O(1) from access to head of list.
   * @returns {*} Data at the front of the queue.
   */
  peek () {
    if (this.isEmpty()) {
      throw new Error('Cannot peek from empty queue')
    }

    return this._dataList.head.data
  }

  /**
   * Add data to the back of the queue.
   * Time complexity: O(1) from list tail insert.
   * @param {*} data Data to be added.
   * @returns {Object} This queue.
   */
  enqueue (data) {
    this._dataList.insertAtTail(data)
    return this
  }

  /**
   * Remove and retrieve the front of the queue.
   * Time complexity: O(1) from shift(0).
   * @returns {*} Data at the front of the queue.
   */
  dequeue () {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from empty queue')
    }

    const frontNode = this._dataList.head
    this._dataList.deleteNodeAtIndex(0)
    return frontNode.data
  }
}

module.exports = {
  Structure: Queue,
  id: 'linked-list-based'
}
