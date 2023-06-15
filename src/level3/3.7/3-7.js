/**
 * Write a program that takes a string as input and returns the length of the longest palindrome that can be formed by rearranging the characters in the string.
 * @param {*} str 
 * @returns  the length of the longest palindrome that can be formed by rearranging the characters in the string.
 */
function longest_palindrome_length(str) {
    let longestStr = 0;
    for (let i = 0; i < str.length; i++) {
        str = str.replace(/\s/g, '');

        let strRight = str.length - 1;
        let count = 0;
        for (let j = 0; j <= str.length / 2; j++) {
            if (str[j] == str[strRight]) {
                count++;
                strRight--;
            } else {
                count += 0;
            }
        }
        if (count > longestStr) {
            longestStr = count;
        }
    }
    return longestStr;
}
module.exports = longest_palindrome_length;