let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

var search = function (nums, target) {

let left = 0;

let right = nums.length - 1;

while (left <= right);
{
  let middle = Math.floor((left + right) / 2); //Math.floor() 函数总是返回小于等于一个给定数字的最大整数
  if (nums[middle] < target) {      //根据target与middle的比较来缩小搜索范围。
    left = middle + 1;
  } else if (nums[middle] > target) {
    right = middle - 1;
  } else {
    return middle;
  }
}
return -1;

};
