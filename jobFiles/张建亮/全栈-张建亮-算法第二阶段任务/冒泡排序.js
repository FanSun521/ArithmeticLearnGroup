/**
 * @param {number[]} nums
 * @return {number[]}
 */
//冒泡排序
var sortArray = function (nums) {
    for (i = 0; i < nums.length; i++) {
        //外层循环
        let flag = false
        for (j = 0; j < nums.length - i; j++) {
            //内层循环
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                //若前大于后，交换元素位置
                flag = true
            }
        };
        if (!flag) {
            return nums
            //未发生元素位置交换
        }
    }
    return nums
};