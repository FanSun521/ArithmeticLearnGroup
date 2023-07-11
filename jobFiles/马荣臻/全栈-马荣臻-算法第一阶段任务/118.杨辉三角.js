/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let number = [], temp = [];
    number[0] = [1];
    for (let i = 1; i < numRows; i++) {
        for (let j = 0; j < number[i - 1].length - 1; j++) {
            temp.push(number[i - 1][j] + number[i - 1][j + 1])
        }
        number[i] = [1].concat(temp).concat([1])
        temp = []
    }
    return number
};