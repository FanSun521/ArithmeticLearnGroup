var sortArray = function(nums) {
    var len=nums.length;
     for(var i=0;i<len-1;i++)
     {
         for(var j=0;j<len-i;j++)
         {
             if(nums[j]>nums[j+1])
             {
                 var temp=nums[j];
                 nums[j]=nums[j+1];
                 nums[j+1]=temp;
             }
         }
     }
     return nums;
};