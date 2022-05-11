const { runSharedUnitTests } = require('../sorting-unit-tests')

const testSubjects = [
  require('./quick-sort-stable')
]

runSharedUnitTests(testSubjects, expect, 'quick sort')
