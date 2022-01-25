<h1>Priority Queue</h1>

<p>A priority queue is an abstract data-type similar to a queue in which each element has a "priority" associated with it. In a priority queue, an element with high priority is served before an element with low priority. In some implementations, if two elements have the same priority, they are served according to the order in which they were enqueued; in other implementations ordering of elements with the same priority remains undefined.</p>

<p>Implement a Priority Queue with the following interface</p>

<h2>Interface</h2>

<table>
 <thead>
  <tr>
    <th colspan="2">Methods & Properties</th>
  </tr>
 </thead>

 <tbody>
  <tr>
    <td><code>enqueue(num: number): void</code></td>
    <td>Add number to queue</td>
  </tr>

  <tr>
    <td><code>dequeue(): number</code></td>
    <td>Get lowest value and remove it from the queue. Dequeueing from an empty queue must rise an exception.</td>
  </tr>

  <tr>
    <td><code>peek(): number</code></td>
    <td>Get lowest value, without removing it from the queue. Peeking from an empty queue must rise an exception.</td>
  </tr>

  <tr>
    <td><code>isEmpty(): boolean</code></td>
    <td>Return true if the queue is empty, otherwise return false.</td>
  </tr>

  <tr>
    <td><code>PriorityQueue.prototype.length</code></td>
    <td>Returns the total number of items inside the queue. Trying to set it must rise an exception.</td>
  </tr>
 </tbody>

</table>

<h2>References</h2>

<ul>
  <li><a href="https://en.wikipedia.org/wiki/Priority_queue">Priority Queue at Wikipedia</a></li>
  <li><a href="https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-priority-queue-class">Priority Queue at freeCodeCamp</a></li>
  <li><a href="https://www.geeksforgeeks.org/priority-queue-set-1-introduction/">Priority Queue at GeeksforGeeks</a></li>
 <li><a href="https://brilliant.org/wiki/priority-queues/">Priority Queue at Brilliant</a></li>
</ul>
