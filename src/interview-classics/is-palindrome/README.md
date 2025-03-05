# Is Palindrome

Write a function `isPalindrome` that takes a string as input, and returns
whether the string is a palindrome.

Punctuation is ignored when validating a palindrome. You only need to consider
the following punctuation characters:

```
- . , : ; ? ! ' "
```

White space is also ignored when validating a palindrome. You only need to
consider the followihg whitespace characters for this exercise

 * `space`
 * `tab`
 * `new line`

## Function Signagure

```typescript
function isPalindrome(str: string): boolean
```

## Expected Behavior

```
In: ''
Out: true

In: 'x'
Out: true

In: 'xy'
Out: false

In: '1230321'
Out: true

In: '1230123'
Out: false

In: ' a: \nbc.  c!-ba? "'
Out: true
```

## Optimizations
