//  1.数组有序2.没有重复元素-二分法找目标值
var search = function(nums, target) {
    // 左闭右闭
    var left=0
    var right=nums.length-1
    while(left<=right){
        //每次循环首先更新middle的值
         var middle=left+(right-left)//2
        if(nums[middle]<target){
            left=middle+1
        }
        else if(nums[middle]>target){
            right=middle-1
        }
        else if(nums[middle]=target){
            return middle
        }
        
    }
    return -1
    

}