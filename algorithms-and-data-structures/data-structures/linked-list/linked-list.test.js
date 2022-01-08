const testSubjects = [
  require('./linked-list')
]

testSubjects.forEach(({ structure, id }) => {
  test(`${id} performs basic linked list operations`, () => {
    const List = structure
    const list = new List()
    expect(list.length).toBe(0)
    expect(list.isEmpty()).toBe(true)

    list.push('red')
    expect(list.length).toBe(1)
    expect(list.isEmpty()).toBe(false)
    expect(list.peekHead()).toBe('red')
    expect(list.peekTail()).toBe('red')
  })
})
