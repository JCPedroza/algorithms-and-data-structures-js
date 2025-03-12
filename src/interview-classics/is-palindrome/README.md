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

## Function Signature

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

Instead of creating a reversed and normalized string, you can use a loop to
compare the first character to the last character, then the second character to
the next-to-last character, and so on. This lowers the space complexity from
linear to constant.
