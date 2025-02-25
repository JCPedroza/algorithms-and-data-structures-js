const solutions = require('./even-fibo.repo')
const { timeAndReport } = require('../../../lib/time')

const args = [100_000]
const runs = 50_000
const id = 'Project Euler 002 - Even Fibonacci Numbers'

timeAndReport(solutions, args, runs, id)
