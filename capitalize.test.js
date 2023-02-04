import capitalize from "./capitalize";

test('capitalize the first letter of a string while the rest are in small letter', () => {
  expect(capitalize('NSHANJI')).toEqual('Nshanji');
  expect(capitalize('nSHANJI')).toEqual('Nshanji');
  expect(capitalize('Nshanji')).toEqual('Nshanji');
  expect(capitalize('nshanji')).toEqual('Nshanji');
  expect(capitalize('nShAnJi')).toEqual('Nshanji');
})