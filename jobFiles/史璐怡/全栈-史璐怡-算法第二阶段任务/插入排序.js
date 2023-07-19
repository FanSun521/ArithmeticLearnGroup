/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        preIndex = i - 1;
        current = nums[i];
        while(preIndex >= 0 && nums[preIndex] > current) {
            nums[preIndex+1] = nums[preIndex];
            preIndex--;
        }
        nums[preIndex+1] = current;
    }
    return nums;
};