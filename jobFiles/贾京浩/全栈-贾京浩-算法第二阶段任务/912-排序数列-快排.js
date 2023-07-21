let sortArray = function (nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
};
function quickSort(nums,start,end) {
    if (start >= end) {
        return;
    }
    const mid = operateArray(nums, start, end);
    quickSort(nums, start, mid - 1);
    quickSort(nums, mid + 1, end);
}
function operateArray(nums, start, end) {
    const pivot = nums[start];
    let right = end;
    let left = start;
    while (left < right) {
        while (left !== right && nums[right] > pivot) {
            right--;
        }
        if (left !== right && nums[right] <= pivot) {
            nums[left] = nums[right];
        }
        while (left !== right && nums[left] <= pivot) {
            left++;
        }
        if (left !== right && nums[left] > pivot) {
            nums[right] = nums[left];
        }
    }
    if (left === right) {
        nums[left] = pivot;
    }
    return left;
}