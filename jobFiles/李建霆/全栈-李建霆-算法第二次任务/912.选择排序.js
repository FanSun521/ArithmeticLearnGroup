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
    let minindex = 0;
    for (i = 0; i < nums.length-1; i++){
        minindex = i
        for (j = i + 1; j < nums.length; j++){//j=i+1是因为第一次循环找出最小数后，第一位数必定最小，所以从下一位开始比较
            if (nums[j] < nums[minindex]) {
                minindex = j;
            }
            
        }
        temp = nums[i];
        nums[i] = nums[minindex];
        nums[minindex] = temp;
    }
    return nums
};
// @lc code=end

