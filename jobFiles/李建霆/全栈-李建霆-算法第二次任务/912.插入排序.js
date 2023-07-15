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
var sortArray = function (nums) {
  let choice, preIndex;

  for (i = 1; i < nums.length; i++) {
    preIndex = i - 1;
    choice = nums[i];
    while (preIndex >= 0 && nums[preIndex] > choice) {
      //如果符合后一项小于前一项的情况就交换比较，且保证能够比较到第一项
      nums[preIndex + 1] = nums[preIndex];
      preIndex--;
    }
    nums[preIndex + 1] = choice;
  }
  return nums;
};
// @lc code=end
