

function count_words(strings) {
    if (typeof strings === "string") {
        return strings.split(" ").length;
    } else {
        return "Invalid input";
    }
}

module.exports = count_words;