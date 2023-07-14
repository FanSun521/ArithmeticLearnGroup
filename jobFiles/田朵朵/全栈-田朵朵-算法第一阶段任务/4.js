/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let arr = [];
    if(numRows === 0) {
        return arr;
    }
    arr.push([1]);
    for(let i = 1;i <= numRows;i++) {
        let row = [];
        row.push(1);

        for(let j = 1;j < i;j++) {
            row.push(arr[i - 1][j - 1] + arr[i - 1][j]);
        }

        row.push(1);
        arr.push(row);
    }
    return arr;
};