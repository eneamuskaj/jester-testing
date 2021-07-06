const capitalize = require("../functions/capitalize");

test("test 1", () => {
  expect(capitalize("helloWorld")).toBe("HelloWorld");
});

test("test 2", () => {
  expect(capitalize("1helloWorld")).toBe("1helloWorld");
});

test("test 3", () => {
  expect(capitalize("i Am A StRinG")).toBe("I Am A StRinG");
});
