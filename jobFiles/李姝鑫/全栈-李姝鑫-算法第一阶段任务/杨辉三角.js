/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    let number = [[1]];
    for(let i=1; i<numRows; i++) {
        number[i] = [1];
        for(let j=1; j<=i; j++) {
            number[i][j] = number[i-1][j-1] + number[i-1][j];
        }
        number[i][i] = 1;
    }
    return number;
};