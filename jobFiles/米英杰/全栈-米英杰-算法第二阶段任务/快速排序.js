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
//快速排序
var sortArray = function (nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums
};
function quickSort(nums, start, end) {
    if (start >= end) {     //实为只有一项（start=end），停止排序
        return
    }
    const partitionIndex = partition(nums, start, end)
    quickSort(nums, start, partitionIndex - 1)
    quickSort(nums, partitionIndex + 1, end)
}
function partition(nums, start, end) {
    const pivot = nums[start]
    let i = start + 1 //i，j双索引
    let j = end
    //不满足条件停下，进行交换，继续执行，直到i==j时退出循环
    while (i < j) { 
        while (i < j && nums[j] >= pivot) {
            j--;
        }
        while (i < j && nums[i] <= pivot) {
            i++;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]//数组结构语法交换
    }
    //如果存在ij同时指向一个数，且其值大于基准值（符合排序规则，不必交换），则j--使ij值不相等避免交换
    if (i === j && nums[i] > pivot) {
        i++
    }
    if (i === j) {
        [nums[start], nums[j]] = [nums[j], nums[start]]
    }
    return j
}
// @lc code=end