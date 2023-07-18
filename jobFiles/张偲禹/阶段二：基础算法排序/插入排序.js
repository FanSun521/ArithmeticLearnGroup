/**
 * @param {number[]} nums
 * @return {number[]}
 */

//插入排序
var sortArray = function (nums) {
    let len = nums.length;
    let preIndex, current;
    for (i = 1; i < len; i++) {
        current = nums[i];
        preIndex = i - 1;
        while (nums[preIndex] > current) {
            nums[preIndex + 1] = nums[preIndex];
            preIndex--;
        }
        nums[preIndex + 1] = current;
    }
    return nums;
};