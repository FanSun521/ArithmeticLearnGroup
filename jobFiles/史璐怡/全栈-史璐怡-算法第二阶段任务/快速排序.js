// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var sortArray = function (nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
};
function quickSort(nums, begin, end) {
    if(begin > end)
        return;
    let i = begin, j = end;
    let temp = nums[begin];
    while (i != j) {
        while(nums[j] >= temp && j > i)
            j--;
        while(nums[i] <= temp && j > i)
            i++;
        if (j > i) {
            let t = nums[i];
            nums[i] = nums[j];
            nums[j] = t;
        }
    }
    nums[begin] = nums[i];
    nums[i] = temp;
    quickSort(nums, begin, i - 1);
    quickSort(nums, i + 1, end);
    return nums;
};

