const testSubjects = [
  require('./ops-for-each'),
  require('./ops-reduce'),
  require('./ops-filter-reduce'),
  require('./ops-entries-filter-map')
]

testSubjects.forEach(({ fun, id }) => {
  test(`${id} sanitizes properly`, () => {
    const object = { title: 'One', year: 2021, hack: true }
    const properties = ['title', 'year']
    const sanitizedCopy = fun(object, properties)

    // Must not have the 'hack' property
    expect(sanitizedCopy).toEqual({ title: 'One', year: 2021 })
  })
})
