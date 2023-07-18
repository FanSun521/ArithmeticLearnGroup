/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = [[1], [1, 1]]
    if (numRows == 1) {
        return [[1]]
    }
    if (numRows == 2) {
        console.log(arr);
        return arr
    }
    if (numRows > 2) {
        for (let i = 3; i <= numRows; i++) {
            let count = 1
            let arrMore = new Array()
            let arrSpe = arr[arr.length - 1]
            arrMore[0] = 1
            arrSpe.forEach((a, b, c) => {
                arrMore[count] = a + c[b + 1]
                count++
            })
            arrMore[i - 1] = 1
            arr.push(arrMore)
        }
        return arr
    }
};