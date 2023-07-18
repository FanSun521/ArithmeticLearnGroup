/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums,left,right) {
    var len = nums.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;
    if(left < right) {
        partitionIndex = partition(nums,left,right);
        sortArray(nums,left,partitionIndex-1);
        sortArray(nums,partitionIndex+1,right);
    }
    return nums;
};
var partition = function(nums,left,right) { 
    var pivot = left,
        index = pivot + 1;
    for(var i = index; i <= right; i++) {
        if(nums[i] < nums[pivot]) {
            swap(nums,i,index);
            index++;
        }
    }
    swap(nums,pivot,index - 1);
    return index-1;
}
var swap = function(nums,i,j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
var partition2 = function(nums,low,high) {
    let pivot = nums[low];
    while(low < high) {
        while(low < high && nums[high] > pivot) {
            --high;
        }
        nums[low] = nums[high];
        while(low < high && nums[low] <= pivot) {
            ++low;
        }
        nums[high] = nums[low];
    }
    nums[low] = pivot;
    return low;
}
var sortArray2 = function(nums,low,high) {
    if(low < high) {
        let pivot = partition2(nums,low,high);
        sortArray2(nums,low,pivot - 1);
        sortArray2(nums,pivot + 1,high);
    }
    return nums;
}







