/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    var len = nums.length
    for (i=0;i<len-1;i++){
        swapped = false
        for(j=0;j<len-1-i;j++){
            if(nums[j] > nums[j+1]){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
                swapped = true
            }
        }
        if(!swapped) break
    }
return nums
};
