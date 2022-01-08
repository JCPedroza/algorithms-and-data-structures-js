const testSubjects = [
  require('./selection-sort')
]

const { runSharedUnitTests } = require('../sorting-unit-tests')

runSharedUnitTests(testSubjects, test, expect, 'selection sort')
