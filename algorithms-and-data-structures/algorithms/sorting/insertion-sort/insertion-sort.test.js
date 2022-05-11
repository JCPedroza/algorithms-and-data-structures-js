const { runSharedUnitTests } = require('../sorting-unit-tests')

const testSubjects = [
  require('./insertion-sort')
]

runSharedUnitTests(testSubjects, expect, 'insertion sort')
