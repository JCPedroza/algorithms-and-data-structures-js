const { readFileSync } = require('fs')
const { join } = require('path')

const { timeAndReport } = require('../../../../../lib/time')
const solutions = require('./ntfta.repo')

const hugeInputPath = join(__dirname, '../input-huge.txt')
const hugeInput = readFileSync(hugeInputPath, 'utf-8')

const args = [hugeInput]
const runs = 25_000
const id = 'Advent of Code 2016 day 1 part 1 (huge input)'

timeAndReport(solutions, args, runs, id)
