/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    //考虑到数字可能是负数，初始化直接搞成负无穷
    let max = -Infinity, sMax = -Infinity, tMax = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        //有大于最大值的就依次向下变更
        if (nums[i] > max) {
            tMax = sMax;
            sMax = max;
            max = nums[i];
        }
        //有小于最大值大于第二大值的就依次向下变更，加一个约束条件防止数字重复出现导致数据错误、提交失败
        else if (nums[i] > sMax && nums[i] != max) {
            tMax = sMax;
            sMax = nums[i];
        }
        //同上
        else if (nums[i] < sMax && nums[i] > tMax) {
            tMax = nums[i]
        }
    }
    //如果第三大的数字不是负无穷说明有第三大的数字，返回第三大
    if (tMax != -Infinity) {
        return tMax;
    }
    //是负无穷说明没有赋值，无第三大，返回最大值
    else {
        return max;
    }
};