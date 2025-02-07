const solutions = require('./multiples-of-3-or-5.repo')
const { timeAndReport } = require('../../../lib/time')

const args = [1000]
const runs = 100
const id = 'Project Euler 001 - Multiples of 3 or 5'

console.log(timeAndReport(solutions, args, runs, id))
