let sortArray = function (nums) {
    for (let i = 0; i < nums.length; i++){
        let flag = i;
        for (let j = i; j < nums.length; j++){
            if (nums[j] < nums[flag]) {
                flag = j;
            }
        }
        [nums[flag],nums[i]] = [nums[i],nums[flag]]
    }
    return nums;
}
//测试
let nums = [1, 4, 8, 9, 6, 5, 7, 3, 2]
console.log(sortArray(nums));