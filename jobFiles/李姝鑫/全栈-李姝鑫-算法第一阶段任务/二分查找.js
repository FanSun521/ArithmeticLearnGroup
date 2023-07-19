var nums = [-1,0,3,5,9,12], target = 9
var search = function(nums, target) {
    let low = 0,high = nums.length-1;
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(target < nums[mid]){
            mid = mid - 1
        }
        else if(target > nums[mid]){
            mid = mid + 1
        }
        else{
            return mid
        }
    }
    return -1
};