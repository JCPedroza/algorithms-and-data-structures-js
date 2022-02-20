const runSharedUnitTests = (testSubjects, test, expect, sortName) => {
  testSubjects.forEach(({ algorithm, id }) => {
    describe(`${sortName} algorithm "${id}"`, () => {
      it('sorts numeric arrays', () => {
        expect(algorithm([])).toEqual([])
        expect(algorithm([9])).toEqual([9])
        expect(algorithm([3, 2, 1, 0, -1, -2, -3])).toEqual([-3, -2, -1, 0, 1, 2, 3])

        expect(algorithm([-13.9, 2.1, 13.9, 2.0, 2.2, -21, 7.092]))
          .toEqual([-21, -13.9, 2.0, 2.1, 2.2, 7.092, 13.9])
      })
    })
  })
}

module.exports = {
  runSharedUnitTests
}
