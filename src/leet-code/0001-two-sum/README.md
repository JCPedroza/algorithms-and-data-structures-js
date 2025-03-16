# Two Sum

Write a function `twoSum`, that takes an array of integers `nums` and an
integer `target` as inputs, and returns the two indexes of the numbers that
add up to `target`.

* Assume that `nums` contains at most one solution.
* Can't use the same element twice.
* Answer must be in ascending order.
* Throw an error if `nums` has no solution for `target`.

## Function Signature

```typescript
function twoSum(nums: number[], target: number): [number, number]
```

## Expected Behavior

```
In: [3, 2], 5
Out: [0, 1]

In: [4, -7, 9, 2], 11
Out: [2, 3]

In: [4, -7, 9, 2, -5], -12
Out: [1, 4]

In: [3, 2], -10
Out: Throw error

In: [9], 9
Out: Throw error

In: [], 0
Out: Throw error
```

## Optimization

Consider:

```
nums[x] + nums[y] = target
target - nums[x] = nums[y]
```

Two nested iterations are needed to find all `nums[x] + nums[y]`. This results
in cuadratic time complexity `O(n^2)`.

In one single iteration we can calculate `target - nums[x]` for all `x` and
perform a fast lookup (like the ones you can perform using a hash map) to
check if we have already seen one of the results.

This avoids nested iterations, resulting in linear time complexity `O(n)`. By
having the results as map keys, the `has()` and `get()` operations cost linear
time.

The trade-off is that we need a place to store the results, so space complexity
goes from constant `O(1)` to linear `O(n)`.

## Complexity Analysis

| solution      | time   | space |
| ------------- | ------ | ----- |
| nested loops  | O(n^2) | O(1)  |
| hash map      | O(n)   | O(n)  |
