
/**
 * Write a program that takes a list of strings as input and returns the two strings with the largest overlap of characters.
 * @param {*} arr 
 * the two strings with the largest overlap of characters
 */
function test1(arr) {
    let max = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let countStringDuplicate = compareStrings(arr[i], arr[j])
            if (countStringDuplicate >= max) {
                max = countStringDuplicate
                result = [arr[i], arr[j]]
            }
        }
    }

    return result;
}

function compareStrings(string1, string2) {
    let count = 0;
    for (let i = 0; i < string1.length; i++) {
        let arrJ = [];
        for (let j = 0; j < string2.length; j++) {
            if (string1[i] == string2[j] && !arrJ.includes(j)) {
                arrJ.push(j)
                console.log(arrJ)
                count++;
                break;
            }
        }
    }
    return count;
}

module.exports = test1;