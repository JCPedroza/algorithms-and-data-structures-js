const { readFileSync } = require('fs')
const { join } = require('path')

const solutions = require('./nqlb.repo')
const { timeAndReport } = require('../../../../../lib/time')

const bigInputPath = join(__dirname, '../input-big.txt')
const bigInput = readFileSync(bigInputPath, 'utf-8')

const args = [bigInput]
const runs = 10_000
const id = 'Advent of Code "Not Quite Lisp (part b)"'

timeAndReport(solutions, args, runs, id)
