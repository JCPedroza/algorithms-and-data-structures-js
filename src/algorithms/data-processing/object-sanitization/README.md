# Object Property Sanitization

Write a function that creates a partial copy of an object, which only includes
the fields, properties, and methods specified in a whitelist represented as an
array of strings.

The function signature is:

```typescript
sanitizeObject(object: object, whitelist: string[]): object
```

# No Strict Mode

Strict type check is disabled for this directory to enable property access via
indexing and strings.
