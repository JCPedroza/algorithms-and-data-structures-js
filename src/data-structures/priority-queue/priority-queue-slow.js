class PriorityQueue {
  constructor () {
    /** @type {number[]} */
    this._nums = []

    /** @type {number?} */
    this._minIndex = null
  }

  get length () {
    return this._nums.length
  }

  /**
   * Check if the priority queue has zero items.
   * Time complexity: O(1).
   * @returns {boolean} True if the priority queue is empty, false otherwise.
   */
  isEmpty () {
    return this.length === 0
  }

  /**
   * Access the data at the front of the priority queue.
   * Time complexity: O(1) best, O(n) worst, O(n) average.
   * @returns {number} The number at the front of the priority queue.
   */
  peek () {
    if (this.isEmpty()) {
      throw new Error('Cannot peek from empty queue.')
    }

    this._minIndex ??= this._getMinIndex()
    return this._nums[this._minIndex]
  }

  /**
   * Add a number to the back of the queue.
   * Time complexity: O(1).
   * @param {number} num Number to add at the back of the queue.
   * @returns This queue.
   */
  enqueue (num) {
    this._nums.push(num)
    this._minIndex = null
    return this
  }

  /**
   * Remove and retrieve the data at the front of the priority queue.
   * Time complexity: O(1) best, O(n) worst, O(n) average.
   * @returns {number} The number at the front of the priority queue.
   */
  dequeue () {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from empty queue.')
    }

    const num = this._nums.splice(this._getMinIndex(), 1)[0]
    this._minIndex = null
    return num
  }

  /**
   * Get the index of the lowest value in the priority queue.
   * Time complexity: O(1) best, O(n) worst, O(n) average.
   * @returns {number} Index of the lowest value in the priority queue.
   */
  _getMinIndex () {
    let minIndex = 0

    for (let index = 1; index < this._nums.length; index++) {
      if (this._nums[index] < this._nums[minIndex]) {
        minIndex = index
      }
    }

    return minIndex
  }
}

module.exports = {
  Struct: PriorityQueue,
  id: 'slow'
}
