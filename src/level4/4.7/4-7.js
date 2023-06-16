/**
 * Write a program that takes a list of strings as input and returns the list sorted by the number of distinct words in each string, with the longest strings appearing first.
 * @param {*} strings 
 * @returns  the list sorted by the number of distinct words in each string, with the longest strings appearing first
 */
function sortByDistinctWords(strings) {
    strings.sort((a, b) => {
        const distinctWordsA = new Set(a.split(' '));
        const distinctCountA = distinctWordsA.size;

        const distinctWordsB = new Set(b.split(' '));
        const distinctCountB = distinctWordsB.size;

        if (distinctCountA === distinctCountB) {
            return b.length - a.length;
        } else {
            return distinctCountB - distinctCountA;
        }
    });

    return strings;
}

module.exports = sortByDistinctWords;
