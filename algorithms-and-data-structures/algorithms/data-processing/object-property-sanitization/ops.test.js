const testSubjects = [
  require('./ops-assign-proxy'),
  require('./ops-entries-filter-map'),
  require('./ops-filter-reduce'),
  require('./ops-for-each'),
  require('./ops-reduce')
]

testSubjects.forEach(({ algorithm, id }) => {
  test(`${id} sanitizes a three-property object`, () => {
    const object = { title: 'One', year: 2021, hack: true }
    const properties = ['title', 'year']
    const sanitizedCopy = algorithm(object, properties)

    // Must not have the 'hack' property
    expect(sanitizedCopy).toEqual({ title: 'One', year: 2021 })
  })
})

testSubjects.forEach(({ algorithm, id }) => {
  test(`${id} sanitizes an empty object`, () => {
    const object = {}
    const properties = ['title', 'year']
    const sanitizedCopy = algorithm(object, properties)

    // Sanitizing an empty object must return an empty object
    expect(sanitizedCopy).toEqual({})
  })
})

testSubjects.forEach(({ algorithm, id }) => {
  test(`${id} sanitizes using empty properties array`, () => {
    const object = { title: 'One', year: 2021, hack: true }
    const properties = []
    const sanitizedCopy = algorithm(object, properties)

    // Sanitizing using an empty properties array must return an empty object
    expect(sanitizedCopy).toEqual({})
  })
})
