const sum = require("./1-1.js");


// test(" add no number to equal underfined", () => {
//   expect(sum("a", "b")).toBe(undefined);
// });

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds -1 + -2 to equal -3", () => {
  expect(sum(-1, -2)).toBe(-3);
});

test("adds -1 + 9 to equal 8", () => {
  expect(sum(-1, 9)).toBe(8);
});
