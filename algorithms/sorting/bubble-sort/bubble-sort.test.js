const testSubjects = [
  require('./bubble-sort-optimized'),
  require('./bubble-sort'),
  require('./bubble-sort-optimized-whileloop')
]

const { createTestCases } = require('../sorting-test-cases')

testSubjects.forEach(({ algorithm, id }) => {
  test(`"${id} bubble sort" sorts numeric arrays`, () => {
    Object.values(createTestCases()).forEach(scenario => {
      expect(algorithm(scenario.in)).toEqual(scenario.out)
    })
  })
})
