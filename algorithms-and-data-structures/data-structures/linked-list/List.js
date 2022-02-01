/**
 * Basic functionality for a list based on head and tail items.
 */
class List {
  constructor () {
    this._head = null
    this._tail = null
    this._length = 0
    List.activeLists.add(this)
  }

  /**
   * Get the first (head) item from the list.
   */
  get head () {
    return this._head
  }

  /**
   * The head property cannot be directly set.
   */
  set head (_) {
    throw new Error('Cannot set head property')
  }

  /**
   * Get the last (tail) item from the list.
   */
  get tail () {
    return this._tail
  }

  /**
   * The tail property cannot be directly set.
   */
  set tail (_) {
    throw new Error('Cannot set tail property')
  }

  /**
   * Get the number of items in the list.
   */
  get length () {
    return this._length
  }

  /**
   * The length property cannot be directly set.
   */
  set length (_) {
    throw new Error('Cannot set length property')
  }

  /**
   * Check if the list has no items.
   * @returns {boolean} True if the list has no items, false otherwise.
   */
  isEmpty () {
    return this.length === 0
  }

  /**
   * Check if the list is a singleton.
   * @returns {boolean} True if the list has exactly one item, false otherwise.
   */
  isSingleton () {
    return this.length === 1
  }

  /**
   * Validate index for methods that accept non-negative indexes.
   * @param {number} index Index to be validated.
   */
  _positiveRangeCheck (index) {
    if (index < 0 || index >= this.length) {
      this._throwRangeErr(index, 0, this.length)
    }
  }

  /**
   * Validate index for methods that accept negative indexes.
   * @param {number} index Index to be validated.
   */
  _wholeRangeCheck (index) {
    if (index < -this.length || index >= this.length) {
      this._throwRangeErr(index, -this.length, this.length)
    }
  }

  /**
   * Throw an error when an index is out of range.
   * @param {number} badIndex The invalid index used by the caller.
   * @param {number} minInc Start of the valid range, inclusive.
   * @param {number} maxExc End of the valid range, exclusive.
   */
  _throwRangeErr (badIndex, minInc, maxExc) {
    const errMsg = `Index ${badIndex} out of range [${minInc}, ${maxExc})`
    throw new Error(errMsg)
  }

  /**
   * Validate that the index is a number, and parse it as integer.
   * @param {number} index Index to be parsed.
   * @returns {number} Parsed index.
   */
  _parseIndex (index) {
    const parsedIndex = parseInt(index)
    if (isNaN(index)) throw new Error(`Index must be a number, input was: ${index}`)
    else return parsedIndex
  }
}

List.activeLists = new Set()

module.exports = List
