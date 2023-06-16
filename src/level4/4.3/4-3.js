function findMaxCommonSubstrings(arr) {
    let maxCommonCount = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let commonCount = 0;
            const str1 = arr[i];
            const str2 = arr[j];

            for (let k = 0; k < str1.length; k++) {
                const substring = str1.substring(k);
                if (str2.includes(substring)) {
                    const substringLength = substring.length;
                    if (substringLength > commonCount) {
                        commonCount = substringLength;
                    }
                }
            }

            if (commonCount > maxCommonCount) {
                maxCommonCount = commonCount;
            }
        }
    }

    return maxCommonCount;
}

module.exports = findMaxCommonSubstrings;
