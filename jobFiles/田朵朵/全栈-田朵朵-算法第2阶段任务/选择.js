/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    var len = nums.length;
    var minIndex,temp;
    for(var i = 0; i < len - 1; i++) {
        minIndex = i;
        for(var j = i + 1; j < len; j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    }
    return nums;
};
