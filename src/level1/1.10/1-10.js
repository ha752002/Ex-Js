
/**
 * Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'.
 * @param {*} stringList 
 * @returns returns the number of strings that contain the letter 'a'
 */
function countStringsContainingA(stringList) {
    let count = 0;
    for (let i = 0; i < stringList.length; i++) {
        if (stringList[i].includes('a')) {
            count++;
        }
    }
    return count;
}

module.exports = countStringsContainingA;