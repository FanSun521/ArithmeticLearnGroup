/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return [];
    let res = [];
    res.push([1]);
    for (let i = 1; i < numRows; i++) {
        //对列循环
        let arr = res[res.length - 1];
        let row = [];
        row.push(1);
        //每一列的第一个数赋值为1
        for (let j = 1; j < arr.length; j++) {
            //对行循环
            row.push(arr[j - 1] + arr[j]);
            //左右对角相加求出下一行对应的值
        }
        row.push(1);
        //每一行的最后一个数赋值为1
        res.push(row);
    }
    return res;
};