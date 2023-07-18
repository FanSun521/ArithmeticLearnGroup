/**
 * @param {number[]} nums
 * @return {number[]}
 */

//快速排序，但是这种写法数字数量过大时会报错...
var sortArray = function (nums) {
    //将第一个元素定为基准
    let pivot = nums[0];
    //声明左右两个新数组
    let left = [], right = [];
    //比基准小的放在left，比基准大的放在right。
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= pivot) {
            left.push(nums[i]);
        }
        else {
            right.push(nums[i]);
        }
    }
    //递归
    if (nums.length < 1) {
        return nums;
    }
    else {
        return sortArray(left).concat([pivot], sortArray(right));
    }

};