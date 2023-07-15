/**
 * @param {number} numRows
 * @return {number[][]}
 */

//构造多维数组，先确定数组项数即numRows，再根据规律利用for循环排出每个数组内元素。
var generate = function (numRows) {
    //1.声明空数组，用来存放numRows个子数组。
    const arr = [];
    //2-1.利用两个for循环，第一个得出子数组个数，第二个根据杨辉三角规律生成每项子数组内元素。
    for (let i = 0; i < numRows; i++) {
        //2-2.numRows已知每项子数组元素个数且首末元素都为1；
        const childArr = new Array(i + 1).fill(1);
        //2-3.除去首末元素还有剩余元素才开始按规律相加，即从第二个元素开始，下标为1；直到倒数第二个元素，下标为length - 2。
        for (let j = 1; j < childArr.length - 1; j++) {
            childArr[j] = arr[i - 1][j - 1] + arr[i - 1][j];
        }
        //3.将每个子数组添加到空数组里。
        arr.push(childArr);
    }
    return arr;
};
