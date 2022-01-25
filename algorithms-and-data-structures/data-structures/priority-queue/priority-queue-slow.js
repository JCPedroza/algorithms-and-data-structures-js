class PriorityQueue {
  constructor (nums = []) {
    this.nums = nums
  }

  get length () {
    return this.nums.length
  }

  set length (_) {
    throw new Error('Cannot set the length property.')
  }

  isEmpty () {
    return this.length === 0
  }

  enqueue (num) {
    this.nums.push(num)
  }

  peek () {
    if (this.isEmpty()) {
      throw new Error('Cannot peek from empty queue.')
    }
    return this.nums[this._getMinIndex()]
  }

  dequeue () {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from empty queue.')
    }
    return this.nums.splice(this._getMinIndex(), 1)[0]
  }

  _getMinIndex () {
    let minIndex = 0

    for (let index = 1; index < this.nums.length; index++) {
      if (this.nums[index] < this.nums[minIndex]) {
        minIndex = index
      }
    }

    return minIndex
  }
}

module.exports = {
  Structure: PriorityQueue,
  id: 'slow'
}
