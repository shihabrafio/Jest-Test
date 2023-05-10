const reversestring = require('./reversestring');

test('reversestring', () => {
  expect(reversestring("Hello")).toBe("olleH");
});