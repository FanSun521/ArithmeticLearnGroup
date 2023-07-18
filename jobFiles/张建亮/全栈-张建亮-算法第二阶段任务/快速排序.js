/**
 * @param {number[]} nums
 * @return {number[]}
 */
//快速排序
var sortArray = function (nums) {
    if (nums.length < 2) return nums;
    //判断长度
    return quickSort(nums, 0, nums.length - 1);
}

function quickSort(nums, low, high) {
    if (low >= high) return;
    let pivotIndex = partition(nums, low, high)
    //划分数组
    quickSort(nums, low, pivotIndex - 1)
    //划分左子表
    quickSort(nums, pivotIndex + 1, high)
    //划分右子表
    return nums;
}
function partition(nums, low, high) {
    let pivot = nums[low]
    //取第一个元素作为枢轴
    while (high > low) {
        while (low < high && pivot <= nums[high])
            --high
        nums[low] = nums[high]
        //比枢轴小的移动到左端
        while (low < high && pivot >= nums[low])
            ++low
        nums[high] = nums[low]
        ////比枢轴大的移动到右端
    }
    nums[low] = pivot
    //枢轴元素放到最终位置
    return low
    //返回枢轴元素的下标
}