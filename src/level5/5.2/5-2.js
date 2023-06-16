
/**
 * chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định. 
 * @param {*} arr 
 * @param {*} num 
 * @returns mảng theo số phần chỉ định.
 */
function chunk(arr, num) {
    const result = []; // Mảng kết quả
    let index = 0;

    while (index < arr.length) {
        result.push(arr.slice(index, index + num));
        index += num;
    }

    return result;
}

module.exports = chunk;