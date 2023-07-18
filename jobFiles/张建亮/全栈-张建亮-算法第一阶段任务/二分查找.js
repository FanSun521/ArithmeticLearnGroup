/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left;
        //找出中间值
        const num = nums[mid];
        if (num === target) {
            return mid;
        } else if (num > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        //与中间值进行对比，根据对比结果进行操作
    }
    return -1;
    //未找到target
};