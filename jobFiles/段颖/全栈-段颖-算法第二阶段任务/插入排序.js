var sortArray = function(nums){
    var preNum, current;
    for (var i = 1; i < nums.length; i++) {
        preNum = i - 1;
        current = nums[i];
        while(preNum >= 0 && nums[preNum] > current) {
            nums[preNum+1] = nums[preNum];
            preNum--;
        }
        nums[preNum+1] = current;
    }
    return nums;
}