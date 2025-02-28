/**
 * Imlements a queue using an array as underlying data structure.
 */
class Queue {
  constructor () {
    /** @type {any[]} */
    this._dataArray = []
  }

  /**
   * Get the number of items in the queue.
   */
  get length () {
    return this._dataArray.length
  }

  /**
   * The length property cannot be directly set.
   */
  set length (_) {
    throw new Error(`Cannot set the length property, input was ${_}`)
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
   * Time complexity: O(1) from array access.
   * @returns {*} Data at the front of the queue.
   */
  peek () {
    if (this.isEmpty()) {
      throw new Error('Cannot peek from empty queue')
    }
    return this._dataArray[0]
  }

  /**
   * Add data to the back of the queue.
   * Time complexity: O(1) from push().
   * @param {any} data Data to be added.
   * @returns {Queue} This queue.
   */
  enqueue (data) {
    this._dataArray.push(data)
    return this
  }

  /**
   * Remove and retrieve the front of the queue.
   * Time complexity: O(n) from shift().
   * @returns {*} Data at the front of the queue.
   */
  dequeue () {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from empty queue')
    }
    return this._dataArray.shift()
  }
}

module.exports = {
  Struct: Queue,
  id: 'array-based'
}
