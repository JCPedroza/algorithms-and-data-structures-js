# Project Euler 007 - 10 001st Prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
that the 6th prime is 13.

What is the `n`th prime number?

The function signature is:

```typescript
prime(index: number): number
```

Example in / out:

```javascript
expect(prime(1)).toBe(2)
expect(prime(3)).toBe(5)
```

## Optimizing Trial Division

Useful information for implementing a more efficient primality check through
trial division.

- 1 is not a prime
- All primes except 2 are odd
- All primes above 3 can be written as `6k +/- 1`
- You can stop checking for divisors at `sqrt n`

## Resources

- [Project Euler Problem 007][1]
- [Project Euler Problem 007 at freeCodeCamp][2]

[1]: https://projecteuler.net/problem=7
[2]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-7-10001st-prime
