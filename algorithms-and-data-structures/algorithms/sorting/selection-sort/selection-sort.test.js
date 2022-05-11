const { runSharedUnitTests } = require('../sorting-unit-tests')

const testSubjects = [
  require('./selection-sort'),
  require('./selection-sort-kindof-optimized')
]

runSharedUnitTests(testSubjects, expect, 'selection sort')
