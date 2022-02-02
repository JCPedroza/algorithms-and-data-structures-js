const testSubjects = [
  require('./queue-array'),
  require('./queue-linked')
]

const validateState = (queue, length, isEmpty, peek) => {
  expect(queue.length).toBe(length)
  expect(queue.isEmpty()).toBe(isEmpty)

  if (peek) expect(queue.peek()).toBe(peek)
  else expect(() => queue.peek()).toThrow(Error)
}

testSubjects.forEach(({ Structure, id }) =>
  test(`"${id}" queue performs basic queue operations`, () => {
    const queue = new Structure()
    validateState(queue, 0, true)

    expect(queue.enqueue('a')).toBe(queue)
    validateState(queue, 1, false, 'a')

    queue.enqueue('b').enqueue('c').enqueue('d')
    validateState(queue, 4, false, 'a')

    expect(queue.dequeue()).toBe('a')
    validateState(queue, 3, false, 'b')

    expect(queue.dequeue()).toBe('b')
    expect(queue.dequeue()).toBe('c')
    expect(queue.dequeue()).toBe('d')
    validateState(queue, 0, true)

    expect(() => queue.peek()).toThrow(Error)
    expect(() => queue.dequeue()).toThrow(Error)
    expect(() => { queue.length = 5 }).toThrow(Error)
  })
)
