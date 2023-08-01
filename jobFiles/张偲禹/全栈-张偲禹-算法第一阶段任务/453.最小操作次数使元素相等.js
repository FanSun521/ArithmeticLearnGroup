/**
 * @param {number[]} nums
 * @return {number}
 */

//所求即为所有元素减1最终全部为最小元素操作次数之和。
var minMoves = function (nums) {
    //1.求得最小元素。
    let minNum = Math.min.apply(null, nums);
    //2.遍历实现所有元素与最小元素差值相加
    let sum = 0;
    nums.forEach((num) => sum += num - minNum);
    return sum;
};