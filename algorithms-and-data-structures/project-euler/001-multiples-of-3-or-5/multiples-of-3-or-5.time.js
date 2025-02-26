const solutions = require('./multiples-of-3-or-5.repo')
const { timeAndReport } = require('../../../lib/time')

const args = [10_000]
const runs = 1_000
const id = 'Project Euler 001 - Multiples of 3 or 5'

timeAndReport(solutions, args, runs, id)
