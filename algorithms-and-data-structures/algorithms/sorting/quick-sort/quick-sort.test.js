const testSubjects = [
  require('./quick-sort-stable')
]

const { runSharedUnitTests } = require('../sorting-unit-tests')

runSharedUnitTests(testSubjects, test, expect, 'quick sort')
