 //数组求最小值Math.min()
// Math.min(...arry)
//相对大小
 // n-1个元素都+1，等价于只将一个元素-1，等价于所有的数与最小值的差值的和
 var minMoves = function(nums) {
    let sum=0
    var min=Math.min(...nums)
    for(let i=0;i<nums.length;i++){
     sum+=nums[i]-min
    }
    return sum
};