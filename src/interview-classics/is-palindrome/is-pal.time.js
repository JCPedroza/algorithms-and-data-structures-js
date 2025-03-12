const { join } = require('path')
const { readFileSync } = require('fs')

const { timeAndReport } = require('../../../lib/time')
const solutions = require('./is-pal.repo')

const smallPalPath = join(__dirname, 'palindrome-small.txt')
const bigPalPath = join(__dirname, '/palindrome-big.txt')

const emptyPalindrome = ''
const smallPalindrome = readFileSync(smallPalPath, 'utf-8')
const bigPalindrome = readFileSync(bigPalPath, 'utf-8')

const emptyArgs = [emptyPalindrome]
const emptyRuns = 1_000_000

const smallArgs = [smallPalindrome]
const smallRuns = 100_000

const bigArgs = [bigPalindrome]
const bigRuns = 10_000

timeAndReport(solutions, emptyArgs, emptyRuns, 'is-palindrome (empty)')
timeAndReport(solutions, smallArgs, smallRuns, 'is-palindrome (small)')
timeAndReport(solutions, bigArgs, bigRuns, 'is-palindrome (big)')
