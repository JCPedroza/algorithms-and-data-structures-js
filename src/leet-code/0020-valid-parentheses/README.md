# Valid Parentheses

Given a string `str` containing just the characters `'('`, `')'`, `'['`, `']'`,
`'{'`, `'}'`, determine if the string is valid.

* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Every close bracket has a corresponding open bracket of the same type.
* Empty strings are valid strings.

## Function Signature

```typescript
function hasValidParentheses(str: string): boolean
```

## Expected Behavior

```
In: ''
Out: true

In: '('
Out: false

In: '()'
Out: true

In: '(]'
Out: false

In: '()[]{}'
Out: true

In: '[{()}]'
Out: true

In: '([)'
Out: false
```
