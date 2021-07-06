const calculator = require("../functions/calculator");

test("test1", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("test2", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("test3", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("test4", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
