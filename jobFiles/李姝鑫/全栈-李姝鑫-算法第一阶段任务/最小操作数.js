/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    //将n-1个元素+1等于让1个元素减1，该题可以转换为计算所有元素减到最小值需要用的的次数
    let min=Math.min(...nums)
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]-min
    }
    return sum
};