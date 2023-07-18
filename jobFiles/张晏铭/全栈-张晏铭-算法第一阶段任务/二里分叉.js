/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let i = Math.floor(nums.length / 2)
    if (target < nums[i]) {
        while (i > 0) {
            i--
            if (nums[i] == target) {
                return i
            }
        }
    }
    else if (target >= nums[i]) {
        while (i <= nums.length - 1) {
            if (nums[i] == target) {
                return i
            }
            i++
        }
    }
    return -1
};