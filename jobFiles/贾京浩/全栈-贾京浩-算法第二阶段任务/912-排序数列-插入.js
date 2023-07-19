let sortArray = function (nums) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i; j > 0; j--){
            if (nums[j] < nums[j - 1]) {
                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            }
        }
    }
    return nums;
}
//测试
let nums = [1, 4, 5, 6, 8, 7, 9, 2, 3]
console.log(sortArray(nums));