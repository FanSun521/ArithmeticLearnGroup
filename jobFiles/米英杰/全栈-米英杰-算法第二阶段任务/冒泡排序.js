/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//冒泡排序
var sortArray = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {   //每排i次，i个数字已完成排序，则下一次少排i个
            if (nums[j] > nums[j + 1]) {        // 相邻元素两两对比。若前一位大于后一位，则交换顺序
                [nums[j],nums[j+1]]=[nums[j+1],nums[j]]  //数组解构语法交换顺序
            }
        }
    }
    return nums
};

// @lc code=end

