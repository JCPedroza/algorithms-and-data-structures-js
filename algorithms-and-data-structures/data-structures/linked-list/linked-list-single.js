const List = require('./List')

/**
 * Node that links to the next node only.
 */
class Node {
  constructor (data, next) {
    this.data = data
    this.next = next
  }
}

/**
 * Implementation of a singly linked list.
 * Space complexity: O(n).
 */
class LinkedList extends List {
  /**
   * Get the Node positioned at the specified index.
   * Time complexity: O(n) for best, worst, and average.
   * @param {number} index Index of the Node to be accessed.
   * @returns {Node} Node positioned at target index.
   */
  getNodeAtIndex (index) {
    index = this._parseIndex(index)
    this._positiveRangeCheck(index)

    let currentNode = this.head
    let currentIndex = 0

    while (currentIndex < index) {
      currentNode = currentNode.next
      currentIndex++
    }

    return currentNode
  }

  /**
   * Get the data positioned at target positive or negative index.
   * Negative index inverts the order of reference.
   * Time complexity: O(n) for best, worst, and average.
   * @param {number} index Index of the data to be accessed, can be negative.
   * @returns {*} Data positioned at target index.
   */
  at (index) {
    const normalizedIndex = index < 0 ? this.length + index : index
    return this.getNodeAtIndex(normalizedIndex).data
  }

  /**
   * Insert data at the start (head) of the list.
   * Time complexity: O(1) for best, worst, and average.
   * @param {*} data Data to be inserted.
   * @returns {Node} Inserted node.
   */
  insertAtHead (data) {
    this._head = new Node(data, this._head)
    if (this.isEmpty()) this._tail = this._head

    this._length++
    return this.head
  }

  /**
   * Insert data at the end (tail) of the list.
   * Time complexity: O(1) for best, worst, and average.
   * @param {*} data Data to be inserted.
   * @returns {Node} Inserted node.
   */
  insertAtTail (data) {
    const newTailNode = new Node(data, null)
    if (!this.isEmpty()) {
      this.tail.next = newTailNode
    } else {
      this._head = newTailNode
    }

    this._tail = newTailNode
    this._length++
    return this.tail
  }

  /**
   * Insert data after the specified Node.
   * Time complexity: O(1) for best, worst, and average.
   * @param {Node} afterNode Node after which the data will be inserted.
   * @param {*} data Data to be inserted.
   * @returns {Node} Inserted node.
   */
  insertAfterNode (afterNode, data) {
    if (afterNode === this.tail) return this.insertAtTail(data)

    const node = new Node(data, afterNode.next)
    afterNode.next = node

    this._length++
    return afterNode.next
  }

  /**
   * Insert data before the specified Node.
   * Time complexity: O(1) best, O(n) worst, O(n) average.
   * @param {Node} beforeNode Node before which the data will be inserted.
   * @param {*} data Data to be inserted.
   * @returns {Node} Inserted node.
   */
  insertBeforeNode (beforeNode, data) {
    if (beforeNode === this.head) return this.insertAtHead(data)

    const prevNode = this._getPrevNode(beforeNode) // O(n)
    prevNode.next = new Node(data, beforeNode)

    this._length++
    return prevNode.next
  }

  /**
   * Insert data at the given index.
   * Time complexity: O(n) for best, worst, and average.
   * @param {number} index Data will be inserted at this index.
   * @param {*} data Data to be inserted.
   * @returns {Node} Inserted Node.
   */
  insertAtIndex (index, data) {
    index = this._parseIndex(index)
    this._positiveRangeCheck(index)

    if (index === 0) return this.insertAtHead(data)
    return this.insertAfterNode(this.getNodeAtIndex(index - 1), data)
  }

  /**
   * Remove node from list.
   * Time complexity: O(1) best, O(n) worst, O(n) average.
   * @param {Node} node Node to be removed.
   * @returns {Node} Removed node.
   */
  deleteNode (node) {
    const prevNode = this._getPrevNode(node) // O(n)
    if (prevNode) prevNode.next = node.next
    if (node === this.head) this._head = node.next
    if (node === this.tail) this._tail = prevNode

    node.next = null
    this._length--
    return node
  }

  /**
   * Delete the node that is positioned at the given index.
   * Time complexity: O(n) for best, worst, and average.
   * @param {number} index Index of the node to be removed.
   * @returns {Node} Deleted node.
   */
  deleteNodeAtIndex (index) {
    return this.deleteNode(this.getNodeAtIndex(index))
  }

  /**
   * Destroy this list.
   * Time complexity: O(n).
   */
  destroy () {
    this._head = null
    this._tail = null
    this._length = 0

    if (!this.isEmpty()) {
      let currentNode = this.head
      while (currentNode) {
        const nextNode = currentNode.next
        currentNode.prev = null
        currentNode.next = null
        currentNode.data = null
        currentNode = nextNode
      }
    }
  }

  /**
   * Convert this list into an array.
   * Time complexity: O(n).
   * @returns {array} Array representation of this list.
   */
  toArray () {
    const array = []
    let currentNode = this.head

    while (currentNode) {
      array.push(currentNode.data)
      currentNode = currentNode.next
    }

    return array
  }

  _getPrevNode (node) {
    if (node === this.head) return null

    let currentNode = this.head
    while (currentNode.next !== node) {
      currentNode = currentNode.next
    }

    return currentNode
  }
}

module.exports = {
  Structure: LinkedList,
  id: 'singly linked list'
}
