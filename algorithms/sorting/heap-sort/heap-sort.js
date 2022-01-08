/**
 * Heapifies an array starting from a specified node.
 * @param {number[]} array Array to heapify.
 * @param {number} size Size of heap.
 * @param {number} root Index of root node.
 */
const heapify = (array, size, root) => {
  const leftChild = 2 * root + 1
  const rightChild = leftChild + 1
  let maxValue = root

  if (leftChild < size && array[leftChild] > array[maxValue]) {
    maxValue = leftChild
  }

  if (rightChild < size && array[rightChild] > array[maxValue]) {
    maxValue = rightChild
  }

  if (maxValue !== root) {
    [array[maxValue], array[root]] = [array[root], array[maxValue]]
    heapify(array, size, maxValue)
  }
}

/**
 * Sorts a numeric array in-place using the Heap Sort approach.
 * Time complexity: O(n log n) for best, worst, and average
 * Space complexity: total O(n) auxiliary O(1)
 * @param {number[]} array Array to be sorted.
 * @returns Sorted array.
 */
const heapSort = (array) => {
  // Create heap
  for (let index = Math.floor(array.length / 2 - 1); index >= 0; index--) {
    heapify(array, array.length, index)
  }

  // Extract root node (min value) from heap, until heap is empty
  for (let index = array.length - 1; index >= 0; index--) {
    [array[0], array[index]] = [array[index], array[0]]
    heapify(array, index, 0)
  }

  return array
}

module.exports = {
  algorithm: heapSort,
  id: 'heap sort'
}
