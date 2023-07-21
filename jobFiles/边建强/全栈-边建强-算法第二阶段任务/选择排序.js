/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    var len = nums.length
    var min ,temp
for(var i = 0;i < len-1;i++){
    min = i
    for(var j=i+1;j < len;j++){
      if(nums[j] < nums[min]){
        min = j
      }
    }
      temp = nums[i]
      nums[i] = nums[min]
      nums[min] = temp
}
return nums
};