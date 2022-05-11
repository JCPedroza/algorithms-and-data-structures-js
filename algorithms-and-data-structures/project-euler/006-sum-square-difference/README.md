# Project Euler 006 - Sum Square Difference

The sum of the squares of the first ten natural numbers is
`1² + 2²+ ... +10² = 385`.

The square of the sum of the first ten natural numbers is
`(1 + 2 + ... + 10)² = 55² = 3025`.

Hence the difference between the sum of the squares of the first ten natural
numbers and the square of the sum is `3025 - 385 = 2640`.

Find the difference between the sum of the squares of the first `n`
natural numbers and the square of the sum.

The function signature is

```typescript
function sumSquareDifference(limit: number): number
```

## Naive - Brute Force Approach

Uses a for loop to accumulate both sums. Then calculate the square of the sum
and return the difference.

## Optimized - Analytic Approach

The sums can be calculated without iterations, using the following properties:

- `sum = limit (limit + 1) / 2`
- `sum of squares = (2limit + 1) (limit + 1) limit / 6`
