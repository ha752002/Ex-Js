
/**
 * Write a program that takes a list of integers as input and returns the longest increasing subsequence of the numbers. ( Tìm độ dài của chuỗi con tịnh tiến dài nhất )
 * @param {*} arr 
 * @returns  the longest increasing subsequence of the numbers. 
 */
function findLongestIncreasing(arr) {
    maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        let maxNumber = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > maxNumber) {
                count++;
                maxNumber = arr[j];
            }

        }
        if (count >= maxLength) {
            maxLength = count;
        }
    }
    return maxLength;
}

module.exports = findLongestIncreasing;