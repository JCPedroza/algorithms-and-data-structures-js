const testSubjects = [
  require('./fizz-buzz-range-floop'),
  require('./fizz-buzz-range-map'),
  require('./fizz-buzz-range-recursive')
]

testSubjects.forEach(({ algorithm, id }) => {
  describe(`Fizz-buzz range algorithm "${id}"`, () => {
    it('creates an array of fizz-buzz strings in the given range', () => {
      expect(algorithm(12, 20))
        .toEqual(['fizz', '13', '14', 'fizzbuzz', '16', '17', 'fizz', '19',
          'buzz'])

      expect(algorithm(-5, 3))
        .toEqual(['buzz', '-4', 'fizz', '-2', '-1', 'fizzbuzz', '1', '2',
          'fizz'])

      expect(algorithm(0, 0)).toEqual(['fizzbuzz'])
    })
  })
})
