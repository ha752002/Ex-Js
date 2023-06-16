/**
 * uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng. 
 * @param {*} arr 
 * @returns về 1 mảng chưas các phần tử duy nhất
 */

function uniq(arr) {
    return [...new Set(arr)];
}

module.exports = uniq;