/**
 * TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng. 
 * @param {*} str 
 * @returns chuỗi bỏ khoảng trắng ở đầu và cuối;
 */
function trimStr(str) {
    return str.trim();
}

module.exports = trimStr;