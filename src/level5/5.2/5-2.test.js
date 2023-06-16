const chunk = require("./5-2");

test("The chunk array", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]]);
});


test("The chunk array", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
});


test("The chunk array", () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([[1, 2, 3, 4], [5, 6, 7, 8]]);
});
