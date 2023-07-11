/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let max = nums[0], maxIndex = 0, temp = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i + 1; j++) {
            if (nums[j] > max) {
                max = nums[j];
                maxIndex = j;
            }
        }
        temp = nums[nums.length - i]
        nums[nums.length - i] = nums[maxIndex]
        nums[maxIndex] = temp
        max = nums[0]
        maxIndex = 0
    }
    return nums
};