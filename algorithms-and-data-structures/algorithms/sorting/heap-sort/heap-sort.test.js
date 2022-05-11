const { runSharedUnitTests } = require('../sorting-unit-tests')

const testSubjects = [
  require('./heap-sort')
]

runSharedUnitTests(testSubjects, expect, 'Heap sort')
