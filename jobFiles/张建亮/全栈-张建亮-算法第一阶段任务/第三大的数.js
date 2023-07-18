/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums.sort((a, b) => a - b)
    nums.reverse()
    //对原数组进行排序
    for (let i = 0, n = 1; i < nums.length; i++) {
        if (nums[i] != nums[i + 1] && n++ === 3) {
            return nums[i]
            //当且仅当前后两个数字不相等时n+1，当n=3时nums[i]即为第三大的数
        }
    }
    return nums[0]
    //不存在第三大的数，返回最大值
};