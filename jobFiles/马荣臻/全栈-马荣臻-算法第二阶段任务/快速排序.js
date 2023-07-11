/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums, begin = 0, end = nums.length - 1) {
    if (begin >= end) {
        return nums;
    }
    let base = nums[begin], i = begin + 1, j = end;

    while (i <= j) {
        while (i <= j && nums[i] < base) {
            i++;
        }
        while (i <= j && nums[j] > base) {
            j--;
        }
        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
            j--
        }
    }
    [nums[begin], nums[j]] = [nums[j], nums[begin]]
    sortArray(nums, begin, j - 1)
    sortArray(nums, i, end)
    return nums
};