/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let j;
    for (let i = 1; i < nums.length; i++) {
        let key = nums[i];
        for (j = i - 1; j >= 0 && nums[j] > key; j--) {
            nums[j + 1] = nums[j];
        }
        nums[j + 1] = key;
    }
    return nums;
};