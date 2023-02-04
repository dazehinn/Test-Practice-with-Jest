// const stringLength = require('./stringLength/');
import stringLength from "./stringLength";

test('returns the character count of a string',() => {
  expect(stringLength('Nshanji')).toBe(7);
})

test('returns error if string length is less than 1 or more than 10',() => {
  expect(() => stringLength('NshanjiHilary')).toThrow('String length is not within 1 and 10 inclusive');
})