/**
 * @param {number[]} nums
 * @return {number}
 */
//n-1个数加1相当于1个数减1
var minMoves = function (nums) {
    const minNum = Math.min(...nums)
    //找出数组中的最小值
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        res = res + nums[i] - minNum
        //将数组中每一个值与最小值的差相加
    }
    return res
};