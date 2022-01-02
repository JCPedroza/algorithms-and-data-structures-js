const testSubjects = [
  require('./bubble-sort-optimized'),
  require('./bubble-sort')
]

const testCases = {
  empty: {
    in: [],
    out: []
  },

  singleton: {
    in: [9],
    out: [9]
  },

  reversed: {
    in: [3, 2, 1, 0, -1, -2, -3],
    out: [-3, -2, -1, 0, 1, 2, 3]
  },

  complex: {
    in: [-13.9, 2.1, 13.9, 2.0, 2.2, -21, 7.092],
    out: [-21, -13.9, 2.0, 2.1, 2.2, 7.092, 13.9]
  }
}

testSubjects.forEach(({ algorithm, id }) => {
  test(`"${id}" sorts arrays`, () => {
    Object.values(testCases).forEach(scenario => {
      expect(algorithm(scenario.in)).toEqual(scenario.out)
    })
  })
})