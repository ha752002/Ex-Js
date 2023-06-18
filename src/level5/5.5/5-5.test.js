const uniqArrayObjects = require("./5-5");


test("test 1:", () => {
    expect(uniqArrayObjects([{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 2, b: 2 }], 'a')).toEqual({ 1: [{ a: 1, b: 2 }, { a: 1, b: 3 }], 2: [{ a: 2, b: 2 }] });
});

test("test 1:", () => {
    expect(uniqArrayObjects([{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 2, b: 2 }], 'b')).toEqual({ 2: [{ a: 1, b: 2 }, { a: 2, b: 2 }], 3: [{ a: 1, b: 3 }] });
});