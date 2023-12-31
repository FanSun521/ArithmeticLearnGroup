/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves = function(nums) {
    let min = nums[0];
    let add = nums[0];
    for(let i = 1; i < nums.length; i++) {
        add += nums[i];
        if(nums[i] < min) {
            min = nums[i];
        }
    }
    return add - min * nums.length
};