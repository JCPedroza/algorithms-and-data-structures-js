const testSubjects = [
  require('./word-count-filter-length'),
  require('./word-count-forloop'),
  require('./word-count-reduce')
]

const complexStr = `One two.three : four
five! six? seven,  eight  ;
nine ten!?? ,.! . `

const testCases = {
  emptyStr: {
    in: '',
    out: 0
  },

  oneWord: {
    in: 'one',
    out: 1
  },

  complex: {
    in: complexStr,
    out: 10
  },

  punctuationAndSpaces: {
    in: '?! .. ;:  ? ,  ',
    out: 0
  }
}

testSubjects.forEach(({ algorithm, id }) => {
  test(`"${id}" counts total words in a string`, () => {
    Object.values(testCases).forEach(scenario => {
      expect(algorithm(scenario.in)).toEqual(scenario.out)
    })
  })
})
