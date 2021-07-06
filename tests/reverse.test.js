const reverse = require("../functions/reverse");

test("test 1.1", () => {
  expect(reverse("helloWorld")).toBe("dlroWolleh");
});

test("test 1.2", () => {
  expect(reverse("1helloWorld")).toBe("dlroWolleh1");
});

test("test 1.3", () => {
  expect(reverse("i Am A StRinG")).toBe("GniRtS A mA i");
});
