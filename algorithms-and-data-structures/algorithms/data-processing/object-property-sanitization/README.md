# Object Property Sanitization

Create a function that creates a partial copy of an object, which only includes
the fields, properties, and methods specified in a whitelist represented as an
array of strings.

The function signature is:

```typescript
sanitizeObjectProperties(original: object, properties: string[]): object
```
