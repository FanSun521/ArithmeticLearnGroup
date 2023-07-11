/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let mid = parseInt(nums.length / 2), right = nums.length - 1, left = 0;
    while (left < right) {
        if (target == nums[mid]) {
            return mid
        }
        else if (target > nums[mid]) {
            left = mid + 1
            mid = parseInt((mid + right) / 2);
        }
        else if (target < nums[mid]) {
            right = mid - 1
            mid = parseInt((mid + left) / 2)
        }
    }
    if (nums[left] == target) {
        return left
    }
    return -1
};