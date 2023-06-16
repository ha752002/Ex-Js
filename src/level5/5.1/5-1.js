/**
 * reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của javascript ( dùng forEach hoặc reduce )
 * @param {*} arr 
 * @returns để đảo ngược thứ tự phần tử trong mảng 
 */

function reverseArray(arr) {
    const reversed = [];
    arr.forEach(element => {
        reversed.unshift(element);
    });
    return reversed;
}

module.exports = reverseArray;