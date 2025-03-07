const { timeAndReport } = require('../../../lib/time')

const solutions = require('./valid-parenth.repo')

const parensStr = '({()}[{}]([]))[{{}}]{}((()))'
const args = [parensStr]
const runs = 100_000
const id = 'LeetCode 0020 "Valid Parentheses"'

timeAndReport(solutions, args, runs, id)
