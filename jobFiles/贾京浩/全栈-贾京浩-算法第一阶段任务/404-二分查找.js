//左闭右闭
let search1 = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        middle = Math.floor((right + left) / 2);
        if (nums[middle] > target) {
            right = middle - 1
        }
        else if (nums[middle] < target) {
            left = middle + 1
        }
        else {
            return middle
        }
    }
    return -1
};
//左闭右开
let search2 = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left < right) {
        middle = left + Math.floor((right - left) / 2);
        if (nums[middle] > target) {
            right = middle
        }
        else if (nums[middle] < target) {
            left = middle
        }
        else {
            return middle
        }
    }
    return -1
};
let nums = [-1,0,3,5,9,12]
let target1 = 2
let target2 = 9
let c = search1(nums, target1)
let d = search1(nums, target2)
console.log(c)
console.log(d);