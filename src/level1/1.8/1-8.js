
/**
 * Write a program that takes a list of numbers as input and returns the median of the numbers.( Tìm số trung vị ( số trung vị không phải số trung bình cộng ))
 * @param {*} numbers 
 * @returns the median of the numbers.
 */
function findNumberMedian(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "Invalid input";
    }
    const sortedNumbers = numbers.sort((a, b) => a - b);
    if (numbers.length % 2 == 1) {
        let i = (sortedNumbers.length - 1) / 2;
        return numbers[i];
    } else {
        let j = sortedNumbers.length / 2;
        return (numbers[j] + numbers[j - 1]) / 2
    }

}

module.exports = findNumberMedian;