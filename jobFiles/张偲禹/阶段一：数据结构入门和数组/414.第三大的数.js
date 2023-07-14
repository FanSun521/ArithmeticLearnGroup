/**
 * @param {number[]} nums
 * @return {number}
 */

//首先将数组排序，排序后遍历：比较相邻元素，直到找到第三大的数；若不存在则返回最大数。
var thirdMax = function (nums) {
    let index = nums.length - 1, count = 0;
    //1.数组排序。
    nums.sort((a, b) => a - b);
    //2-1.若满足至少有三个不同元素，倒序遍历，比较相邻元素是否相等。
    for (; index > 0; index--) {
        if (nums[index] !== nums[index - 1]) {
            //2-2.count作为计数器。
            count++;
        }
        if (count == 2) {
            //2-3.此时未进入下一次循环，第三大的数需要下标减一。
            return nums[index - 1];
        }
    }
    //3.都不满足返回最大值
    return nums[nums.length - 1];
};