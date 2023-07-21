var sortArray = function(nums){
        var minIndex;
        for (var i = 0; i < nums.length - 1; i++) {
            minIndex = i;
            for (var j = i + 1; j < nums.length; j++) {
                if (nums[j] < nums[minIndex]) {     // 寻找最小的数
                    minIndex = j;                 // 将最小数的索引保存
                }
            }
            t = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = t;
        }
        return nums;
    }