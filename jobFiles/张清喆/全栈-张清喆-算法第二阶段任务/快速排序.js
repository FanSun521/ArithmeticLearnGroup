var sortArray = function(nums,begin=0,end=nums.length-1) {
    if(begin > end)
    {
        return 1;
    }
    var temp = nums[begin];
    var i=begin;
    var j=end;
    while(i<j)
    {
        while(nums[j]>=temp && i<j)
        {
            j--;
        }
        while(nums[i]<=temp && i<j)
        {
            i++;
        }
        if(i<j)
        {
            var temp1=nums[i];
            nums[i]=nums[j];
            nums[j]=temp1;
        }
    }
    nums[begin]=nums[i];
    nums[i]=temp;
    sortArray(nums, begin, i-1);
    sortArray(nums, i+1, end);s
    return nums;
};
