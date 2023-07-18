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
  for (i = 0; i < nums.length - 1; i++) {
    //外层循环，循环几个数
    for (j = 0; j < nums.length - 1 - i; j++) {
      //内层循环，比较几次；第一次比较，必然把最大的数放到了最后，所以第二次比较只比较nums.length-1-i次
      if (nums[j] > nums[j + 1]) {
        //比大小
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
};
// @lc code=end
