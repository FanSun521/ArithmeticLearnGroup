/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let minNum = Math.min(...nums)
    let times = 0
    for (let num of nums) {
        times += num - minNum
    }
    return times
};
// @lc code=end

