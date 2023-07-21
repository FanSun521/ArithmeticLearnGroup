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
//选择排序
var sortArray = function(nums) {
    let minIndex
    for (let i = 0; i < nums.length - 1; i++) {  //排序n-1次即可完成
        minIndex = i
        for (let j = i + 1; j < nums.length; j++) {// 从i的下一位开始寻找最小的数
            if (nums[j] < nums[minIndex]) {     
                minIndex = j               // 找到后将最小数的索引保存到minIndex
            }
        }
        [nums[i],nums[minIndex]]=[nums[minIndex],nums[i]]
    }
    return nums    
};


// @lc code=end

