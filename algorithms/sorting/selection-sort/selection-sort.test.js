const testSubjects = [
  require('./selection-sort')
]

const { createTestCases } = require('../sorting-test-cases')

testSubjects.forEach(({ algorithm, id }) => {
  test(`"${id} selection sort" sorts numeric arrays`, () => {
    Object.values(createTestCases()).forEach(scenario => {
      expect(algorithm(scenario.in)).toEqual(scenario.out)
    })
  })
})
