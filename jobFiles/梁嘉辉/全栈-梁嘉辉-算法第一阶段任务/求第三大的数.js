var thirdMax = function(nums) {
  var arr=nums.sort(num)
  var n=1;
  for(var i=1;i<arr.length;i++){
    if(arr[i]!=arr[i-1]){
      n+=1;
      if(n>=3){
        return arr[i]
      }
    }
  }
  return arr[0]
};
var num=function(a,b){
return b-a
}