const testSubjects = [
  require('./priority-queue-slow')
]

const validateState = (pqueue, length, isEmpty, peek) => {
  expect(pqueue.length).toBe(length)
  expect(pqueue.isEmpty()).toBe(isEmpty)

  if (peek) expect(pqueue.peek()).toBe(peek)
  else expect(() => pqueue.peek()).toThrow(Error)
}

for (const { Structure, id } of testSubjects) {
  test(`"${id}" performs basic priority queue operations`, () => {
    const pqueue = new Structure()
    validateState(pqueue, 0, true)

    expect(pqueue.enqueue(-10)).toBe(pqueue)
    validateState(pqueue, 1, false, -10)

    pqueue.enqueue(10).enqueue(-20).enqueue(20)
    validateState(pqueue, 4, false, -20)

    expect(pqueue.dequeue()).toBe(-20)
    validateState(pqueue, 3, false, -10)

    expect(pqueue.dequeue()).toBe(-10)
    expect(pqueue.dequeue()).toBe(10)
    expect(pqueue.dequeue()).toBe(20)
    validateState(pqueue, 0, true)

    expect(() => pqueue.dequeue()).toThrow(Error)
  })
}
