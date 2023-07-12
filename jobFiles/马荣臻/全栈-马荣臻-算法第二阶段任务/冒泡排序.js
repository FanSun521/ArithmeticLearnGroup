/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    //重复n次，每次将最大的排到最后
    for (let i = nums.length - 1; i > 0; i--) {
        //因为每次会排出一个最大的，所以每一次要排列的长度都在减小
        for (let j = 0; j < i; j++) {
            //按照大小关系排列交换
            if (nums[j] > nums[j + 1]) {
                nums[j] = (nums[j + 1] + nums[j]) - (nums[j + 1] = nums[j])
            }
        }
    }
    return nums
};