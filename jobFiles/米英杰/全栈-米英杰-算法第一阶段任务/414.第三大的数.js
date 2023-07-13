/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let numsNew = Array.from(new Set(nums.sort((a, b) => b - a)))
    if (numsNew.length < 3) {
        return numsNew[0]
    }
    return numsNew[2]
};
// @lc code=end

