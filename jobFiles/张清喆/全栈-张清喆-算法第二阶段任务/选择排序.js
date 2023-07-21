var sortArray = function(nums) {
    var len = nums.length;
    for(var i=0;i<len-1;i++)
    {
        var min=i;
        for(var j=i+1;j<len;j++)              
        {
            if(nums[j]<nums[min])
            {
                min=j;
            }
        }
        var temp=nums[min];
        nums[min]=nums[i];
        nums[i]=temp;
    }
    return nums;
};
