const testSubjects = [
  require('./selection-sort')
]

const { createTestCases } = require('../sorting-test-cases')

const testCases = createTestCases()

testSubjects.forEach(({ algorithm, id }) => {
  test(`"${id} selection sort" sorts numeric arrays`, () => {
    Object.values(testCases).forEach(scenario => {
      expect(algorithm(scenario.in)).toEqual(scenario.out)
    })
  })
})
