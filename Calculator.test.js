import Calculator from "./Calculator";

describe('Testing the calculator methods', () => {
  let calc1 = new Calculator(8, 2);
  let calc2 = new Calculator();
  test('addition of two numbers', () => {
    expect(calc1.add()).toBe(10);
    expect(calc2.add()).toBe(1)
  });
  test('subtraction of two numbers', () => {
    expect(calc1.subtract()).toBe(6);
    expect(calc2.subtract()).toBe(-1)
  });
  test('division of two numbers', () => {
    expect(calc1.divide()).toBe(4);
    expect(calc2.divide()).toBe(0)
  });
  test('multiplication of two numbers', () => {
    expect(calc1.multiply()).toBe(16);
    expect(calc2.multiply()).toBe(0)
  });
})