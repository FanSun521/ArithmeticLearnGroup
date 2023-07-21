/**
 * @param {number[]} nums
 * @return {number[]}
 */
//插入排序
var sortArray = function (nums) {
    let i, j, temp;
    for (i = 0; i < nums.length; i++) {
        //外层循环
        if (nums[i] > nums[i + 1]) {
            temp = nums[i + 1]
            //前后比较
            for (j = i; j >= 0 && nums[j] > temp; j--) {
                nums[j + 1] = nums[j]
                //所有大于temp的元素后移
            }
            nums[j + 1] = temp
            //将temp插入
        }
    }
    return nums
}