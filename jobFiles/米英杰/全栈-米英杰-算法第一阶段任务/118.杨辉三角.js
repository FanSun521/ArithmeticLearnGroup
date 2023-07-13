/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = [[1]]
    for (let i = 1; i < numRows; i++) {
        arr.push([1, 1])
        for (let j = 1; j < i; j++) {
            arr[i].splice(j, 0, arr[i - 1][j - 1] + arr[i - 1][j])
        }
    }
    return arr
};
// @lc code=end

