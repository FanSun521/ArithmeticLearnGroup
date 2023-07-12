/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    //每次查找最大的元素，并记录其索引
    let max = nums[0], maxIndex = 0, temp = 0;
    for (let i = 1; i < nums.length; i++) {
        //找最大
        for (let j = 0; j < nums.length - i + 1; j++) {
            if (nums[j] > max) {
                max = nums[j];
                maxIndex = j;
            }
        }
        //把最大的排列到末尾对应位置
        temp = nums[nums.length - i]
        nums[nums.length - i] = nums[maxIndex]
        nums[maxIndex] = temp
        max = nums[0]
        maxIndex = 0
    }
    return nums
};