
/**
 * Write a program that takes a list of strings as input and returns the length of the longest substring that appears in every string in the list.
 * @param {*} arr 
 * @returns  the length of the longest substring that appears in every string in the list.
 */
function test1(arr) {
    let longestSubstring = '';

    for (let i = 0; i < arr[0].length; i++) {
        for (let j = i + 1; j <= arr[0].length; j++) {
            const substring = arr[0].substring(i, j);
            if (isSubstringInAllStrings(substring, arr)) {
                if (substring.length > longestSubstring.length) {
                    longestSubstring = substring;
                }
            }
        }
    }

    return longestSubstring.length;
}

function isSubstringInAllStrings(substring, strings) {
    for (let i = 1; i < strings.length; i++) {
        if (!strings[i].includes(substring)) {
            return false;
        }
    }
    return true;
}
module.exports = test1;