var minMoves = function(nums) {
  var min=nums[0]
  for(var i=1;i<nums.length;i++){
      if(nums[i]<min){
          min=nums[i]
      }
  }
  var least = 0;
  for (var n=0;n<nums.length;n++) {
      least += (nums[n] - min);
  }
  return least;
};