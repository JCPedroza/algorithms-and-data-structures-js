# Project Euler 004 - Largest Palindrome Product

A palindromic number reads the same both ways. The largest palindrome made
from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two `n`-digit numbers.

The function signature is

```typescript
function largestPalindromeProduct(digits: number): number
```

## Naive Approach

Two nested loops. Both count from the first n-digit number to the last one
(inclusive). Multiply both and check if the product is a palindrome and if
so, check if it is the largest one so far.

A small optimization was implemented. The inner loop starts counting from
the current outer loop value, instead of starting from the first n-digit
number. This avoids checking the same value twice, like 3 x 2 = 6 and
2 x 3 = 6.

## Optimized Approach

A faster approach is to count downwards so the program is far more likely
to find a large palindrome earlier. We can stop checking factors that would
be too small to improve upon the largest palindrome found so far.

## Even More Optimized Approach

Project Euler's overview shows another possible improvement that has not
been implemented in this repository.

## Resources

- [Project Euler Problem 004][1]
- [Project Euler Problem 004 at freeCodeCamp][2]

[1]: https://projecteuler.net/problem=4
[2]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-4-largest-palindrome-product
