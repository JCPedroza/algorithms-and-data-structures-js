const testSubjects = [
  require('./bubble-sort-optimized'),
  require('./bubble-sort'),
  require('./bubble-sort-optimized-whileloop')
]

const { runSharedUnitTests } = require('../sorting-unit-tests')

runSharedUnitTests(testSubjects, test, expect, 'bubble sort')
