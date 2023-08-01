/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//利用二分法进行查找，左闭右闭型。
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    //1.规定循环条件,left=right有意义。
    while (left <= right) {
        //2-1.初始化mid
        let mid = parseInt((right + left) / 2);
        //2-1.比较nums[mid]与目标值，若恰好为目标值则mid即为目标值下标；若nums[mid]比目标值大则改变right,去左区间；反之改变left，去右区间。
        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    //3.结束循环未找到返回-1。
    return -1;
};