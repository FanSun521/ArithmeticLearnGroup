/**
 * @param {number[]} nums
 * @return {number[]}
 */

//选择排序
var sortArray = function (nums) {
    let len = nums.length;
    let minIndex, temp;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (nums[minIndex] > nums[j]) {
                minIndex = j;
            }
        }
        temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    }
    return nums;
};