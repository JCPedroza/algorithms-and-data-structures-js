const testSubjects = [
  require('./merge-sort')
]

const { runSharedUnitTests } = require('../sorting-unit-tests')

runSharedUnitTests(testSubjects, test, expect, 'merge sort')
