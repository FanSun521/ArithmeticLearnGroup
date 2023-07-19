let sortArray = function (nums) {
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length - 1 - i; j++){
            if (nums[j] > nums[j + 1]) {
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
            }
        }
    }
    return nums;
};
//测试
let nums = [1,4,5,8,9,3,2,7,6]
console.log(sortArray(nums));