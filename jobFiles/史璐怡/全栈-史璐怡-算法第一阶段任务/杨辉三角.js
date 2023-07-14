/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var arr = new Array(numRows)
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(i + 1);
    }
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j === 0 || j === i) {
                arr[i][j] = 1;
            } else {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }
    }
    return arr;
};