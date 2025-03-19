const { readFileSync } = require('fs')
const { join } = require('path')

const { timeAndReport } = require('../../../../../lib/time')
const solutions = require('./nqla.repo')

const bigInputPath = join(__dirname, '../input-big.txt')
const bigInput = readFileSync(bigInputPath, 'utf-8')

const args = [bigInput]
const runs = 1_000
const id = 'Advent of Code "Not Quite Lisp (part a)"'

timeAndReport(solutions, args, runs, id)
