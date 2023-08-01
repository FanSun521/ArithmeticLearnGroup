/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    var len = nums.length;
    var preIndex,current;
    for(var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = nums[i];
        while(preIndex >= 0 && nums[preIndex] > current) {
            nums[preIndex+1] = nums[preIndex];
            preIndex--;
        }
        nums[preIndex+1] = current;
    }
    return nums;
}