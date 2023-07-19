var sortArray = function(nums) {
        var len = nums.length;
    //外层for循环控制比较的轮数
    for (var i = 0; i < len - 1; i++) {
        //里层循环控制每一轮比较的次数
        for (var j = 0; j < len - 1 - i; j++) {
            if (nums[j] > nums[j+1]) {        // 相邻元素两两对比
                var temp = nums[j+1];        // 元素交换
                nums[j+1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};