const { readFileSync } = require('fs')
const { join } = require('path')

const { timeAndReport } = require('../../../../../lib/time')
const solutions = require('./ntftb.repo')

const bigInputPath = join(__dirname, '../input-huge.txt')
const bigInput = readFileSync(bigInputPath, 'utf-8')

const args = [bigInput]
const runs = 10_000
const id = 'Advent of Code 2016 day 1 part 2'

timeAndReport(solutions, args, runs, id)
