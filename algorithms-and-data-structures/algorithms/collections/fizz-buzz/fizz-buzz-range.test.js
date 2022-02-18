const testSubjects = [
  require('./fizz-buzz-range-forloop'),
  require('./fizz-buzz-range-map')
]

const testCases = {
  scenarioOne: {
    in: [12, 20],
    out: ['fizz', '13', '14', 'fizzbuzz', '16', '17', 'fizz', '19', 'buzz']
  },

  scenarioTwo: {
    in: [-5, 3],
    out: ['buzz', '-4', 'fizz', '-2', '-1', 'fizzbuzz', '1', '2', 'fizz']
  }
}

testSubjects.forEach(({ algorithm, id }) => {
  test(`"${id}" correctly generates fizzbuzz ranges`, () => {
    Object.values(testCases).forEach(scenario => {
      expect(algorithm(...scenario.in)).toEqual(scenario.out)
    })
  })
})
