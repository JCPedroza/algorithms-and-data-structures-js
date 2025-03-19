# Advent of Code 2015 Day 1 - Not Quite Lisp

## Part A

Santa is trying to deliver presents in a large apartment building, but he can't
find the right floor - the directions he got are a little confusing. He starts
on the ground floor (floor `0`) and then follows the instructions one character
at a time.

An opening parenthesis, `(`, means he should go up one floor, and a closing
parenthesis, `)`, means he should go down one floor.

The apartment building is very tall, and the basement is very deep; he will
never find the top or bottom floors.

To what floor do the instructions take Santa? Assume that the input string can
only contain the characters `(`, `)`.

### Expected Behavior

```
In: ''
Out: 0

In: '(())'
Out: 0

In: '(((('
Out: 4

In: '))))'
Out: -4

In: ')())())'
Out: -3
```

## Part B

Now, given the same instructions, find the position of the first character that
causes him to enter the basement (floor -1). The first character in the
instructions has position 1, the second character has position 2, and so on.

What is the position of the character that causes Santa to first enter the
basement? Throw an error if the basement is never reached.

### Expected Behavior

```
In: ''
Out: Throw error

In: ')'
Out: 1

In: '())()'
Out: 3

In: '()((()'
Out: Throw error
```
