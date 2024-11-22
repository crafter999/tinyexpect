# tinyexpect
 
`expect` is a lightweight testing utility  with 0 dependencies that provides a Jest-like assertion API for TypeScript/JavaScript projects that use the native Node.js test runner `node --test`.

## API Reference

### Matchers

- `toBe(value)`: Checks strict equality (including deep equality for objects)
- `toNotBe(value)`: Checks strict inequality
- `eitherOr(values[])`: Checks if value is included in an array of possible values
- `toBeNumber()`: Verifies value is a number
- `toBeNumberOrParsed()`: Verifies value is either a number or can be parsed as one
- `toBeNumberOr(values[])`: Verifies value is either a number or one of the specified strings
- `toBeFalsy()`: Checks if value is falsy
- `toBeTruthy()`: Checks if value is truthy
- `toBeDefined()`: Verifies value is not undefined
- `toContainString(str)`: Checks if string contains a substring
- `toNotContainString(str)`: Checks if string does not contain a substring

## Error Handling

All matchers throw descriptive errors when assertions fail, including:
- Detailed error messages for object comparisons
- Type mismatch notifications
- Clear expected vs actual value reporting

## License

MIT