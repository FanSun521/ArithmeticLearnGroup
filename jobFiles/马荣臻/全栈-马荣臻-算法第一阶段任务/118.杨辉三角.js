/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    //设置数组number作为杨辉三角数组，temp存放每一行的新数组
    let number = [], temp = [];
    number[0] = [1];
    //根据传入的numRows生成杨辉三角对应行数
    for (let i = 1; i < numRows; i++) {
        //首尾补1，中间为上一列相邻数字两两相加，共加出i-1个数字
        for (let j = 0; j < number[i - 1].length - 1; j++) {
            temp.push(number[i - 1][j] + number[i - 1][j + 1])
        }
        //拼接数组
        number[i] = [1].concat(temp).concat([1])
        //重置临时存放数组
        temp = []
    }
    return number
};