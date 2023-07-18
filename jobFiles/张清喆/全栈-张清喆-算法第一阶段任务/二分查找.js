var search = function(nums, target) {
    var left=0;
    var right=nums.length-1;
    do
    {
        var mid=Math.floor((left+right)/2);
        var num=nums[mid];
        if(num<target)
        {
            left=mid+1;                          
        }
        else if(num>target)
        {
            right=mid-1;
        }
        else if(num==target)
        {
            return mid;
        }
    }while(left<=right);
    return -1;
};