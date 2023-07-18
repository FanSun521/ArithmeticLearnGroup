var thirdMax = function(nums) {
    var arr=[];
    for(var i=0;i<3;i++)
    {
        arr[i]=Math.min(...nums)-1;
    }
    for (var j=0;j<nums.length;j++) 
    {       
        if (nums[j] >arr[0])
         {
            arr[2]=arr[1];
            arr[1]=arr[0];
            arr[0]=nums[j];
        }
        else if (nums[j]>arr[1] && nums[j]<arr[0]) 
        {
            arr[2]=arr[1];
            arr[1]=nums[j];
        }
        else if (nums[j]>arr[2] && nums[j]<arr[1]) 
        {
            arr[2]=nums[j];
        }
    }
    if(arr[2]===Math.min(...nums)-1)
    {
        return arr[0];
    }
    else
    {
        return arr[2];
    }
};