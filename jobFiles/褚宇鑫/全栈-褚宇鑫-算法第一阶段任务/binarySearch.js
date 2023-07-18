var search = function(nums, target) {
    let left = 0,right = nums.length-1;
    while(left < right){
        let middle = Math.floor((left + right)/2);
        if(target > nums[middle]){
            left = middle+1;
        }else if(target < nums[middle]){
            right = middle-1;
        }else{
            return middle;
        }
    }
    return -1

};
console.log(search(nums = [-1,0,3,5,9,12,13], target = 2));