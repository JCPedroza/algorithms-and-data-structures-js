const testSubjects = [
  require('./selection-sort'),
  require('./selection-sort-kindof-optimized')
]

const { runSharedUnitTests } = require('../sorting-unit-tests')

runSharedUnitTests(testSubjects, test, expect, 'selection sort')
