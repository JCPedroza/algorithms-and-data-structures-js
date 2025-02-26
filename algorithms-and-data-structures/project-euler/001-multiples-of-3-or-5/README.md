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

In: 15.9
Out: 45

In: 15
Out: 45
```

## Optimizations

### Iterative Solutions

Instead of iterating through all natural numbers one-by-one, iterate only
through multiples of 3 or 5.

### Analytic Solutions

Using arithmetic progression we can avoid iteration alltogether, and
analytically calculate the sum of multiples of `n`.

Sum the multiples of 3 and the multiples of 5, then subtract the sum of the
multiples of 15, which are multiples of both 3 and 5 that need to be removed
to avoid counting them twice.

```
multiples of 3 + multiples of 5 - multiples of 15
```
