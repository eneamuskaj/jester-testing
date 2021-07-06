const array = require("../functions/array-analysis");

test("test1", () => {
  expect(array.average([1, 2, 3, 4, 5])).toBe(3);
});

test("test1", () => {
  expect(array.min([1, 2, 3, 4, 5])).toBe(1);
});

test("test1", () => {
  expect(array.max([1, 2, 3, 4, 5])).toBe(5);
});

test("test1", () => {
  expect(array.length([1, 2, 3, 4, 5])).toBe(5);
});
