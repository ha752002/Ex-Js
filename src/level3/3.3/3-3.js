
/**
 * Write a program that takes a list of integers as input and returns the longest increasing subsequence of the numbers. ( Tìm độ dài của chuỗi con tịnh tiến dài nhất )
 * @param {*} arr 
 * @returns  the longest increasing subsequence of the numbers. 
 */
function findLongestIncreasing(arr) {
    const length = arr.length;
    const longestLengths = new Array(length).fill(1);

    for (let i = 1; i < length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && longestLengths[i] < longestLengths[j] + 1) {
                longestLengths[i] = longestLengths[j] + 1;
            }
        }
    }

    let maxLength = 0;
    for (let i = 0; i < length; i++) {
        if (longestLengths[i] > maxLength) {
            maxLength = longestLengths[i];
        }
    }

    return maxLength;
}

module.exports = findLongestIncreasing;