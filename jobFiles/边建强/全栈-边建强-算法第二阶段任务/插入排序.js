/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for(var i=1;i<nums.length;i++){
        temp = nums[i]
        var j = i
while(temp < nums[j-1]){
    nums[j] = nums[j-1]
    j--
    }
    nums[j] = temp
}
return nums
};