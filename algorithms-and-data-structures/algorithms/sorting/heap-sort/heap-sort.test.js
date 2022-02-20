const testSubjects = [
  require('./heap-sort')
]

const { runSharedUnitTests } = require('../sorting-unit-tests')

runSharedUnitTests(testSubjects, test, expect, 'Heap sort')
