/**
 * Converts subtree into max heap, and recursively operates on
 * affected subtrees.
 * @param {number[]} nums Array of numbers.
 * @param {number} size Size of heap.
 * @param {number} root Index of root node.
 */
const heapify = (nums, size, root) => {
  const leftChild = 2 * root + 1
  const rightChild = leftChild + 1
  let maxValue = root

  if (leftChild < size && nums[leftChild] > nums[maxValue]) {
    maxValue = leftChild
  }

  if (rightChild < size && nums[rightChild] > nums[maxValue]) {
    maxValue = rightChild
  }

  if (maxValue !== root) {
    [nums[maxValue], nums[root]] = [nums[root], nums[maxValue]]
    heapify(nums, size, maxValue)
  }
}

/**
 * Sorts a numeric array in-place using the Heap Sort approach.
 * Time complexity: O(n log n) for best, worst, and average
 * Space complexity: total O(n) auxiliary O(1)
 * @param {number[]} nums Array to be sorted.
 * @returns Sorted array.
 */
const heapSort = (nums) => {
  // Create heap
  for (let index = Math.floor(nums.length / 2 - 1); index >= 0; index--) {
    heapify(nums, nums.length, index)
  }

  // Extract root node (max value) from heap, until heap is empty
  for (let index = nums.length - 1; index >= 0; index--) {
    [nums[0], nums[index]] = [nums[index], nums[0]]
    heapify(nums, index, 0)
  }

  return nums
}

module.exports = {
  algorithm: heapSort,
  id: 'heap sort'
}
