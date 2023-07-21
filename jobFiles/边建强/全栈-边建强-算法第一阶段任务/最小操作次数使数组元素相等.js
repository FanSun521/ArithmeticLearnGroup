/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var min=nums[0] ,sum=0
for(var item in nums){
    sum+=nums[item]
    if(nums[item]<min)
    min=nums[item]
}
return sum-min*nums.length
};