/**
 * uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection
 * @param {*} objects 
 * @returns mảng chứa object có value and key duy nhất 
 */
function uniqArrayObjects(objects) {
    const uniqueObjects = [];
    const seenObjects = new Set();

    objects.forEach(object => {
        const objectString = JSON.stringify(object);
        if (!seenObjects.has(objectString)) {
            seenObjects.add(objectString);
            uniqueObjects.push(object);
        }
    });

    return uniqueObjects;
}

module.exports = uniqArrayObjects;