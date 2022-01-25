const testSubjects = [
  require('./priority-queue-slow')
]

for (const { Structure, id } of testSubjects) {
  test(`"${id}" performs basic priority queue operations`, () => {
    const pqueue = new Structure([5, -2, 3])
    expect(pqueue.length).toBe(3)
    expect(pqueue.isEmpty()).toBe(false)
    expect(pqueue.peek()).toBe(-2)

    pqueue.enqueue(1)
    pqueue.enqueue(-1)
    expect(pqueue.length).toBe(5)
    expect(pqueue.isEmpty()).toBe(false)
    expect(pqueue.peek()).toBe(-2)

    expect(pqueue.dequeue()).toBe(-2)
    expect(pqueue.dequeue()).toBe(-1)
    expect(pqueue.dequeue()).toBe(1)
    expect(pqueue.length).toBe(2)
    expect(pqueue.isEmpty()).toBe(false)
    expect(pqueue.peek()).toBe(3)

    expect(pqueue.dequeue()).toBe(3)
    expect(pqueue.dequeue()).toBe(5)

    expect(pqueue.length).toBe(0)
    expect(pqueue.isEmpty()).toBe(true)

    expect(() => pqueue.dequeue()).toThrow(Error)
    expect(() => pqueue.peek()).toThrow(Error)
    expect(() => { pqueue.length = 5 }).toThrow(Error)
  })
}
