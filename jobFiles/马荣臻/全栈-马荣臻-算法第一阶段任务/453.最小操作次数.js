/**
 * @param {number[]} nums
 * @return {number}
 */
//采用逆向思维，给n-1个元素+1相当于给一个元素-1，则计算一下每一个数字与最小值的差，将其相加即可
var minMoves = function (nums) {
    let sum = 0, min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    //遇到负数容易出问题导致提交失败，所以写成这种形式，即使最小值是负数也不会出现负数返回值
    return sum - min * nums.length
};