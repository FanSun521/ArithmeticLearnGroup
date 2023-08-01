/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0,right = nums.length - 1;
    let middle = (left + right) / 2;
    while (left <= right) {
        const midNum = nums[middle];
        if (midNum === target) {
            return middle;
        } else if (midNum > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
};