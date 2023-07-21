/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const numsSet = new Set(nums);
    nums = [...numsSet]
    nums.sort((a, b) => b - a)
    var i = 0,flog = 1
    if(nums.length >= 3){
        return nums[2]
    }else{
        return nums[0]
    }
};