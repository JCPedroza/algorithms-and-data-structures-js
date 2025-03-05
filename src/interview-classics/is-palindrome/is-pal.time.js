const { join } = require('path')
const { readFileSync } = require('fs')

const { timeAndReport } = require('../../../lib/time')
const solutions = require('./is-pal.repo')

const bigPalPath = join(__dirname, '/big-palindrome.txt')
const bigPalindrome = readFileSync(bigPalPath, 'utf-8')

const args = [bigPalindrome]
const runs = 10_000

timeAndReport(solutions, args, runs, 'Is palindrome?')
