const findShortestString = require("./1-5.js");

test("The shortest string in an empty list should be an empty string", () => {
    expect(findShortestString([])).toBe(undefined);
});

test("The shortest string in a list with one element should be that element", () => {
    expect(findShortestString(["apple"])).toBe("apple");
});

test("The shortest string in a list with multiple elements", () => {
    expect(findShortestString(["apple", "banana", "orange", "kiwi"])).toBe("kiwi");
});
