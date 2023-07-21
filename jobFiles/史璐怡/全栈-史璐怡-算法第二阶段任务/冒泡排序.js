/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i; j++) {
            if(nums[j] > nums[j+1]){
                var temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};