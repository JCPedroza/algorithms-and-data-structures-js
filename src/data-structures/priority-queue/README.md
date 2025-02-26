# Priority Queue

A priority queue is an abstract data-type similar to a queue in which each
element has a "priority" associated with it. In a priority queue, an element
with high priority is served before an element with low priority. In some
implementations, if two elements have the same priority, they are served
according to the order in which they were enqueued; in other implementations
ordering of elements with the same priority remains undefined.

Implement a Priority Queue with the following interface.

## Interface

```enqueue(num: number): void```

- Add number to queue

```dequeue(): number```

- Get lowest value and remove it from the queue.
- Dequeueing from an empty queue must rise an exception.

```peek(): number```

- Get lowest value, without removing it from the queue.
- Peeking from an empty queue must rise an exception.

```isEmpty(): boolean```

- Return true if the queue is empty, otherwise return false.

```PriorityQueue.prototype.length```

- Returns the total number of items inside the queue.
- Trying to set it must rise an exception.

## Resources

- [Priority Queue at Wikipedia][1]
- [Priority Queue at Rosetta Code][2]
- [Priority Queue at freeCodeCamp][3]
- [Priority Queue at GeeksforGeeks][4]
- [Priority Queue at Brillian][5]

[1]: https://en.wikipedia.org/wiki/Priority_queue
[2]: https://rosettacode.org/wiki/Priority_queue
[3]: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-priority-queue-class
[4]: https://www.geeksforgeeks.org/priority-queue-set-1-introduction/
[5]: https://brilliant.org/wiki/priority-queues/
