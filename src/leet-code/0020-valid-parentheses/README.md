# Valid Parentheses

Given a string `str` consisting of the following characters: `'('`, `')'`,
`'['`, `']'`, `'{'`, `'}'`, determine if `str` is valid.

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

## Optimizations

By iteratively removing adjacent open-close pairs, you can achieve cuadratic
time complexity.

A better approach is to iterate through the string only once, using a stack
to manage the state, achieving linear time complexity.
