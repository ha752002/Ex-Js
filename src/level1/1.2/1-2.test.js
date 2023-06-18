const lengthStr = require("./1-2.js");

test(" Check typeof no string", () => {
    expect(lengthStr([1, 2, 3])).toBe("Invalid input");
});

test(" Length of String", () => {
    expect(lengthStr("Beautiful")).toBe(9);
});

test(" Length of String", () => {
    expect(lengthStr("hi")).toBe(2);
});

test(" Length of String", () => {
    expect(lengthStr("Hihi")).toBe(4);
});


test(" Length of String", () => {
    expect(lengthStr("  ")).toBe(2);
});

test(" Length of String", () => {
    expect(lengthStr(" , ")).toBe(3);
});