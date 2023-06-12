const maxNumber = require("./1-4.js");

test("largest number in arr", () => {
    expect(maxNumber([])).toBe("Invalid input");
});

test("largest number in arr", () => {
    expect(maxNumber([5, 8, 1, 2, 3])).toBe(8);
});


test("largest number in arr", () => {
    expect(maxNumber([])).toBe("Invalid input");
});

test("largest number in arr ", () => {
    expect(maxNumber([10, 12, 14])).toBe(14);
})