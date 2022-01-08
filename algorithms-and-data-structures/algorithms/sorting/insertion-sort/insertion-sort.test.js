const testSubjects = [
  require('./insertion-sort')
]

const { runSharedUnitTests } = require('../sorting-unit-tests')

runSharedUnitTests(testSubjects, test, expect, 'insertion sort')
