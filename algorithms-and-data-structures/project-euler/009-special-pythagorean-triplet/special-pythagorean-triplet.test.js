const testSubjects = [
  require('./special-pythagorean-triplet-naive')
]

for (const { solution, id } of testSubjects) {
  describe(`Project euler solution "${id}"`, () => {
    it('finds a specific special pythagorean triplet', () => {
      expect(solution(24)).toBe(480)
      expect(solution(120)).toBeOneOf([49_920, 55_080, 60_000])
      expect(solution(1_000)).toBe(31_875_000)
    })
  })
}
