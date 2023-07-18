/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    var length = nums.length;
    for(let i = 0; i < length - 1; i++) {
        for(let j = 0; j < length - 1; j++) {
            if(nums[j] > nums[j+1]) {
                let temp = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};