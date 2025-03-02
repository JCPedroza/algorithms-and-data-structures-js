const { timeAndReport } = require('../../../lib/time')

const solutions = require('./two-sum.repo')

const nums = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  8, 7, 6, 5, 4, 3, 2, 1, 0, 2,
  4, 6, 8, 1, 3, 5, 7, 9, 3, 6,
  9, 4, 8, 9, 8, 6, 5, 3, 2, 1,
  8, 6, 4, 2, 5, 1, 9, 5, 3, 8,
  0, 4, 0, 8, 0, 6, 0, 4, 0, 3,
  2, -9, 4, 5, 7, 8, -8, 7, 4, 6
]

const args = [nums, -17]
const runs = 10_000
const id = 'LeetCode 0001 - Two Sum'

timeAndReport(solutions, args, runs, id)
