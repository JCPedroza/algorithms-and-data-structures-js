const testSubjects = [
  require('./bubble-sort-optimized'),
  require('./bubble-sort'),
  require('./bubble-sort-optimized-whileloop')
]

const { createTestCases } = require('../sorting-test-cases')

const testCases = createTestCases()

testSubjects.forEach(({ algorithm, id }) => {
  test(`"${id} bubble sort" sorts numeric arrays`, () => {
    Object.values(testCases).forEach(scenario => {
      expect(algorithm(scenario.in)).toEqual(scenario.out)
    })
  })
})
