function collectObject(arr, field) {
    let collection = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i][field]
        if (collection[key] == undefined) {
            collection[key] = [arr[i]];
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j][field] == key) {
                    collection[key].push(arr[j])
                }
            }
        }
    }

    return collection
}

module.exports = collectObject;