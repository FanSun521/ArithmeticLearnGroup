/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let max = -Infinity, sMax = -Infinity, tMax = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            tMax = sMax;
            sMax = max;
            max = nums[i];
        } else if (nums[i] > sMax && nums[i] != max) {
            tMax = sMax;
            sMax = nums[i];
        } else if (nums[i] < sMax && nums[i] > tMax) {
            tMax = nums[i]
        }
    }
    if (tMax != -Infinity) {
        return tMax;
    }
    else {
        return max;
    }
};