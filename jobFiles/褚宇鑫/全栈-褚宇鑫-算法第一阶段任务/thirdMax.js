var thirdMax = function(nums) {
    Max = Math.max.apply(null, nums)
    nums = nums.filter(item =>item !== Max);
    second_Max = Math.max.apply(null, nums);
    nums = nums.filter(item =>item !== second_Max);
    if(nums.length == 0){
        return Max;
    }else{
        third_Max = Math.max.apply(null, nums)
        return third_Max
    }
}
arr = [1, 2, 2, 3, 3]
console.log(thirdMax(arr))