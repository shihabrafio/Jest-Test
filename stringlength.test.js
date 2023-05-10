const stringlength = require('./stringlength');

test('Stringlength', () => {
  expect(stringlength("Hello")).toBe(5);
});