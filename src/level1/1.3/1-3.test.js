const areaSquare = require("./1-3.js");

test(" Area of ​​the Rectangle", () => {
    expect(areaSquare("-1")).toBe(undefined);
});

test(" Area of ​​the Rectangle", () => {
    expect(areaSquare("0")).toBe(undefined);
});

test(" Area of ​​the Rectangle", () => {
    expect(areaSquare("0")).toBe(undefined);
});

test(" Area of ​​the Rectangle", () => {
    expect(areaSquare("0.5")).toBe(0.25);
});