const { runSharedUnitTests } = require('../sorting-unit-tests')

const testSubjects = [
  require('./bubble-sort-optimized'),
  require('./bubble-sort'),
  require('./bubble-sort-optimized-whileloop')
]

runSharedUnitTests(testSubjects, expect, 'Bubble sort')
