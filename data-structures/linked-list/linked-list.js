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

  push (data) {
    const tailNode = new Node(data, null)
    if (this.tail) this.tail.next = tailNode
    this.tail = tailNode
    this.length++
  }

  insert (data, node = null) {
    if (node && node !== this.tail) {
      node.next = new Node(data, node.next)
      this.length++
    } else {
      this.push(data)
    }
  }
}

module.exports = {
  structure: List,
  id: 'linked list'
}
