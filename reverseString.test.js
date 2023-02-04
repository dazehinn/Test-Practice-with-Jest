import { reverseString } from "./reverseString";

test('reverses a given string', () => {
  expect(reverseString('badboy')).toBe('yobdab');
})