function findSecondSmallest(numbers) {
    if (numbers.length < 2 || !Array.isArray(numbers)) {
        return "Invalid input";
    } else {
        numbers.sort((a, b) => a - b);
        return numbers[1];
    }
}

module.exports = findSecondSmallest;