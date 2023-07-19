/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    var result = 0
    var count = -1
    if(target>nums[nums.length/2]){
        start = nums.length/2+1
        end = nums.length}
        else{
            start = 0
            end = nums.length/2+1
        }
        for(var i = start;i < end;i++){
            if(nums[i] == target){
                count++
                result = i
            }
        }
        if (count == -1){return count}
        else return result
    };