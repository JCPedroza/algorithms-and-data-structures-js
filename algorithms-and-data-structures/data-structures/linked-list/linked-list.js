class Node {
  constructor (data, next) {
    this.data = data
    this.next = next
  }
}

class List {
  constructor () {
    this.length = 0
    this.head = null
    this.tail = null
  }

  isEmpty () {
    return this.length === 0
  }

  peekTail () {
    this._emptyCheck('peekTail')
    return this.tail.data
  }

  peekHead () {
    this._emptyCheck('peekHead')
    return this.head.data
  }

  push (data) {
    const node = new Node(data, null)
    if (this.tail) this.tail.next = node
    if (this.isEmpty()) this.head = node
    this.tail = node
    this.length++
  }

  insertAfterNode (data, node = null) {
    if (node && node !== this.tail) {
      node.next = new Node(data, node.next)
      this.length++
    } else {
      this.push(data)
    }
  }

  removeNextNode (node) {
    const callerId = 'removeNextNode'
    this._emptyCheck(callerId)
    this._hasNextCheck(node, callerId)

    const nodeToRemove = node.next
    if (nodeToRemove === this.tail) this.tail = node
    node.next = nodeToRemove.next
    this.length--
    return nodeToRemove.data
  }

  _emptyCheck (callerId) {
    if (this.isEmpty()) {
      throw new Error(`Cannot ${callerId} from empty list`)
    }
  }

  _hasNextCheck (node, callerId) {
    if (!node.next) {
      throw new Error(`Cannot ${callerId}, null next node`)
    }
  }
}

module.exports = {
  structure: List,
  id: 'linked list'
}
