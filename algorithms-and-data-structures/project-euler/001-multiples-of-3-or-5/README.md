# Project Euler 001 - Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we
get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below `limit`.

If `limit` is negative, the result must be 0.

If `limit` is not an integer, remove the decimal part and work with the
integer value.

## Function Signature

```typescript
function multiplesOf3Or5(limit: number): number
```

## Expected Behavior

```
In: < 1
Out: 0

In: 10
Out: 23

In: 100
Out: 2,318

In: 10.9
Out: 23
```
