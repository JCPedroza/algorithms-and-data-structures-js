const testSubjects = [
  require('./linked-list-single'),
  require('./linked-list-double')
]

const validateState = (list, head, tail, length, isEmpty, arrayVersion) => {
  if (head) expect(list.head.data).toBe(head)
  else expect(list.head).toBe(null)
  if (tail) expect(list.tail.data).toBe(tail)
  else expect(list.tail).toBe(null)

  expect(list.length).toBe(length)
  expect(list.isEmpty()).toBe(isEmpty)
  expect(list.toArray()).toEqual(arrayVersion)
}

testSubjects.forEach(({ Structure, id }) => {
  test(`"${id}" performs basic linked list operations`, () => {
    // List initialization
    const list = new Structure()
    validateState(list, null, null, 0, true, [])

    // Insert items using head and tail methods
    list.insertAtHead('a')
    list.insertAtTail('c')
    validateState(list, 'a', 'c', 2, false, ['a', 'c'])

    // Insert items using index method
    list.insertAtIndex(1, 'b')
    list.insertAtIndex(0, 'x')
    validateState(list, 'x', 'c', 4, false, ['x', 'a', 'b', 'c'])

    // Insert items using node methods
    list.insertBeforeNode(list.getNodeAtIndex(0), 'z')
    list.insertAfterNode(list.getNodeAtIndex(list.length - 1), 'o')
    validateState(list, 'z', 'o', 6, false, ['z', 'x', 'a', 'b', 'c', 'o'])

    // Access with .at() method
    expect(list.at(-1)).toBe('o')
    expect(list.at(-2)).toBe('c')
    expect(list.at(0)).toBe('z')
    expect(list.at(1)).toBe('x')

    // Throw exceptions with invalid indexes
    expect(() => list.getNodeAtIndex(-1)).toThrow(Error)
    expect(() => list.getNodeAtIndex(6)).toThrow(Error)
    expect(() => list.at(-7)).toThrow(Error)
    expect(() => list.at(6)).toThrow(Error)

    // Remove nodes
    list.deleteNode(list.getNodeAtIndex(3))
    list.deleteNodeAtIndex(2)
    validateState(list, 'z', 'o', 4, false, ['z', 'x', 'c', 'o'])

    // Destroy list
    list.destroy()
    validateState(list, null, null, 0, true, [])
  })
})
