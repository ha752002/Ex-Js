const areaSquare = require("./1-3.js");

test(" Area of ​​the Rectangle with number", () => {
    expect(areaSquare(1)).toBe(1);
});

test(" Area of ​​the Rectangle", () => {
    expect(areaSquare(0)).toBe("Invalid input");
});

test(" Area of ​​the Rectangle with value str", () => {
    expect(areaSquare("a")).toBe("Invalid input");
});

test("Area of a square with valid input", () => {
    expect(areaSquare(0.5)).toBe(0.25);
});