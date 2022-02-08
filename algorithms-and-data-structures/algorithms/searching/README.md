# Binary Search

Binary search aka half-interval search, logarithmic search, or binary chop,
is a search algorithm that finds the position of a target value within a
sorted array.

It compares the target value to the middle element of the array.
If they are not equal, the half in which the target cannot lie is eliminated
and search continues on the remaining half, by comparint the target value
to the middle element of the current half. This continues until the value is
found or the search is exhausted at the `log n` iteration.

## Time Complexity

- Best O(n)
- Worst O(log n)
- Average O(log n)

## Space Complexity

- O(1) best, worst, average

## Resources

- [Binary Search at Wikipedia][1]

[1]: https://en.wikipedia.org/wiki/Binary_search_algorithm
