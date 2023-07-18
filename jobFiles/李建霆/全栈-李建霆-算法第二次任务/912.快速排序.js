/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  Partition(nums, 0, nums.length - 1);
  return nums;
};
//快速排序
//从数列中挑出一个元素，称为 "基准"（pivot）;
//重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一/边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
//递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；

function Partition(nums, begin, end) {
  if (begin >= end) return; //防止begin < end的情况发生

  let left = begin + 1; // 左指针
  let right = end; //右指针
  const pivot = nums[begin]; //基准数，这里取数组第一个数

  while (left < right) {
    //分区操作

    while (left < right && nums[right] >= pivot) {
      right--;
    }
    while (left < right && nums[left] <= pivot) {
      left++;
    }
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }

  if (left === right && nums[right] > pivot) {
    //防止相同情况出现
    right--;
  }

  [nums[begin], nums[right]] = [nums[right], nums[begin]];
  //最后交换基准数与指针相遇位置的数

  Partition(nums, begin, right - 1); //递归函数，使左右分区排序

  Partition(nums, right + 1, end);

  return nums;
}

// @lc code=end
