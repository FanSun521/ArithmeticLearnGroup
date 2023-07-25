/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums, begin = 0, end = nums.length - 1) {
    //约束递归条件防止栈溢出
    if (begin >= end) {
        return nums;
    }
    //设置基准值与两个探针
    let base = nums[begin], i = begin + 1, j = end;
    //保证i遇到的数全都小于基准值，j遇到的全都大于基准值，否则探针停止移动，两者对应的数交换。
    while (i != j) {
        //i和j不是同时移动，防止j移动到i左边去,为了防止两个相等的数导致死循环所以添加条件nums[j] >= base
        while (i < j && nums[j] >= base) {
            j--;
        }
        while (i < j && nums[i] < base) {
            i++;
        }
        //i<j说明有需要交换的数字
        if (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    if (nums[i] < base) {
        [nums[begin], nums[i]] = [nums[i], nums[begin]]
    }
    //递归排列分出来的部分
    sortArray(nums, begin, i - 1)
    sortArray(nums, i, end)
    return nums
};