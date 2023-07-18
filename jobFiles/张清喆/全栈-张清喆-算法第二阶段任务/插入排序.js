var sortArray = function(nums) {
    for(var i=1;i<nums.length;i++)
    {
        var a=nums[i];
        var j=i-1;
        while(j>=0&&nums[j]>a)
        {
            nums[j+1]=nums[j];
            j--;
        }
        nums[j+1]=a;
    }
    return nums;
};