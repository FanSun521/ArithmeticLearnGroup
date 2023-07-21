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
//插入排序
var sortArray = function(nums) {
    let preIndex, current
    for (let i = 1; i < nums.length; i++) {
        preIndex = i - 1
        current = nums[i]  //抽出当前要排的项
        while (preIndex >= 0 && nums[preIndex] > current) { 
            nums[preIndex + 1] = nums[preIndex]    //若比该项大，则将其向后移位
            preIndex--
        }
        nums[preIndex + 1] = current //找到比它小的那项或者第一项，将其插入其后部（-1项的后部为第一项）
    }
    return nums
};

// @lc code=end

