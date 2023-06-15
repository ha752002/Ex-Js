
function sortByDistinctCharacters(str) {
    str.sort(function (a, b) {
        if (a.length == b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    });
    return str;
}

module.exports = sortByDistinctCharacters;








