/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSort(nums,0,nums.length-1)
    return nums;
}
function quickSort(nums,L,R){
if(L>=R) return
var left = L
var right = R
pivot = nums[left]
    while(pivot < nums[right]&&right>left){
        right--
    }
    if(right!=left){
        [nums[right],nums[left]] = [nums[left],nums[right]]
    }
    while(pivot > nums[left]&&left<right){
        left++
    }
    if(right!=left){
        [nums[left],nums[right]] = [nums[right],nums[left]]
    }else[nums[left],nums[pivot]] = [nums[pivot],nums[left]]
    // quickSort(nums,left,right-1)
    quickSort(nums,left+1,right)
};