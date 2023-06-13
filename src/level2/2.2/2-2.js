
/**
 * Write a program that takes a list of strings as input and returns the longest word in the list.
 * @param {*} words 
 * @returns  the longest word in the list.
 */

function longestWordArr(words) {
    if (words.length < 2 || !Array.isArray(words)) {
        return "Invalid input";
    } else {
        let longestWord = "";
        words.forEach(word => {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        });
        return longestWord;
    }

}

module.exports = longestWordArr;