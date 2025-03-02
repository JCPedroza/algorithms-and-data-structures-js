const { join } = require('path')
const { readFileSync } = require('fs')

const { timeAndReport } = require('../../../lib/time')
const solutions = require('./is-palindrome.repo')

const bigPalPath = join(__dirname, '/big-palindrome.txt')
const palindrome = readFileSync(bigPalPath, 'utf-8')

const args = [palindrome]
const runs = 10_000

timeAndReport(solutions, args, runs, 'Is palindrome?')
