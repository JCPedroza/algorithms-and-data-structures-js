/**
 * Interface for a node with one link.
 *
 * @private
 * @typedef OneLinkNode
 * @property {any} data Data to be held by the node.
 * @property {OneLinkNode?} next
 */

/**
 * Create a node with one link.
 *
 * @private
 * @param {any} data Data to be held by the node.
 * @param {OneLinkNode?} next Optional reference to the next node.
 * @returns {OneLinkNode} A node with one link.
 */
const oneLinkNode = (data, next = null) => ({
  data,
  next
})

/**
 * State of the list.
 *
 * @private
 * @typedef ListState
 * @property {OneLinkNode?} head
 */

/**
 * Creates an object with the 'length' method.
 *
 * @param {ListState} state State of the list.
 * @returns {{length: () => number}} Object with the 'length' method.
 */
const trainLength = (state) => ({
  length: () => {
    let count = 0
    let node = state.head

    while (node !== null) {
      count++
      node = node.next
    }

    return count
  }
})

/**
 * Creates object with the 'insertStart' method.
 *
 * @param {ListState} state State of the list.
 * @returns {{insertStart: (data: any) => void}} Object with 'insertStart'
 * method.
 */
const trainInsertStart = (state) => ({
  insertStart: (data) => {
    state.head = oneLinkNode(data, state.head)
  }
})

/**
 * Creates an object with the 'at' method.
 *
 * @param {ListState} state State of the list.
 * @returns {{at: (index: number) => any}} Object with 'at' method.
 */
const trainAt = (state) => ({
  at: (index) => {
    let count = 0
    let node = state.head

    while (count < index && node !== null) {
      count++
      node = node.next
    }

    if (node == null) {
      throw new RangeError(`Index out of range: ${index}`)
    }

    return node.data
  }
})

/**
 * Creates an object with the 'first' method.
 *
 * @param {ListState} state State of the list.
 * @returns {{first: () => any}} An object with the 'first' method.
 */
const trainFirst = (state) => ({
  first: () => {
    if (state.head === null) {
      throw new RangeError('Called first() on empty list')
    }

    return state.head.data
  }
})

/**
 * Creates a list.
 *
 * @returns {List} A new List object.
 */
const createList = () => {
  const state = { head: null }

  return Object.assign(
    trainLength(state),
    trainInsertStart(state),
    trainAt(state),
    trainFirst(state)
  )
}

module.exports = {
  createList,
  id: 'singly-linked while-loop'
}
