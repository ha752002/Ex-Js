const uniqArrayObjects = require("./5-4");


test("test 1:uniqArrayObjects :", () => {
    expect(uniqArrayObjects([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }])).toEqual([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]);
})
test("test 2: uniqArrayObjects", () => {
    const objects = [{ 'a': 1, 'b': 2 }, { 'a': 1, 'b': 2 }, { 'a': 1, 'b': 2 }];
    const expected = [{ 'a': 1, 'b': 2 }];
    const result = uniqArrayObjects(objects);
    expect(result).toEqual(expected);
});

test("test 3: uniqArrayObjects", () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'z': 3 }];
    const expected = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'z': 3 }];
    const result = uniqArrayObjects(objects);
    expect(result).toEqual(expected);
});

test("test 4: uniqArrayObjects", () => {
    const objects = [];
    const expected = [];
    const result = uniqArrayObjects(objects);
    expect(result).toEqual(expected);
});