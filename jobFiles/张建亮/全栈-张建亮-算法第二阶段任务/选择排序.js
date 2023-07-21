/**
 * @param {number[]} nums
 * @return {number[]}
 */
//简单选择排序
var sortArray = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        //外层循环
        let min = i;
        for (j = i + 1; j < nums.length; j++) {
            //内层循环
            if (nums[min] > nums[j]) {
                min = j;
                //更新最小元素位置
            }
        }
        if (min != i) {
            [nums[min], nums[i]] = [nums[i], nums[min]]
            //将最小元素放到前面
        }
    }
    return nums
}