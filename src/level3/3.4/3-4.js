
/**
 * Write a program that takes a list of strings as input and returns the two strings with the largest overlap of characters.
 * @param {*} arr 
 * the two strings with the largest overlap of characters
 */
function test1(arr) {
    let TwoStringLargest = [];
    let maxlength = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let count = 0;
            for (let str of arr[i]) {
                if (arr[j].includes(str)) {
                    count++;
                }
            }
            if (count > maxlength) {
                maxlength = count;
                // TwoStringLargest = (arr[i], arr[j]);
            } else if (count === maxlength) {
                TwoStringLargest = (arr[i], arr[j]);
            }


        }
    }

    return maxlength;

}

module.exports = test1;