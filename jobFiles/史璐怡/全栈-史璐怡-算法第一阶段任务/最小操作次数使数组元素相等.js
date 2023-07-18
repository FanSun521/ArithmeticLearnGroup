/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = nums[0],n = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element<min) {
            min = element;
        }
    };
    for (let j = 0; j < nums.length; j++) {
        n += nums[j] - min;
    }
    return n;
};