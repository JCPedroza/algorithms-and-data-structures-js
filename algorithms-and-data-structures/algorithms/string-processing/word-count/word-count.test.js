const testSubjects = [
  require('./word-count-filter-length'),
  require('./word-count-forloop'),
  require('./word-count-reduce')
]

const complexStr = `One two.three : four
five! six? seven,  eight  ;
nine ten!?? ,.! . `

const weirdStr = '?! .. ;:  ? ,  '

testSubjects.forEach(({ algorithm, id }) => {
  describe(`Word count algorithm "${id}"`, () => {
    it('counts the words of a string', () => {
      expect(algorithm('')).toBe(0)
      expect(algorithm(weirdStr)).toBe(0)

      expect(algorithm('one')).toBe(1)
      expect(algorithm(complexStr)).toBe(10)
    })
  })
})
