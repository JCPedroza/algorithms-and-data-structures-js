const { runSharedUnitTests } = require('../sorting-unit-tests')

const testSubjects = [
  require('./merge-sort')
]

runSharedUnitTests(testSubjects, expect, 'merge sort')
