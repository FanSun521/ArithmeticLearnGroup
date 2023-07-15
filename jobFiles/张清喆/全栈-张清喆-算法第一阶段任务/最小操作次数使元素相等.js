var minMoves = function(nums) {
    var min=nums[0];
    var num=0;
    for(var i=1;i<nums.length;i++)
    {
        if(min>nums[i]){
            min=nums[i];
        }
    }
    for(var j=0;j<nums.length;j++)
    {
        num+=(nums[j]-min);
    }
    return num;
};