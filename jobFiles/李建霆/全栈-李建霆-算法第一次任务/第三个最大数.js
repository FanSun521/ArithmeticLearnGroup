/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums.sort(function (a, b) {
    //倒序排序
    return b - a;
  });
  for (i = 1, diff = 1; i < nums.length; ++i) {
    if (nums[i] !== nums[i - 1]) {
      //如果相邻的数不相同，则给不同的数计数加一
      ++diff;
      //如果有三种不同的数，则返回第三大的数
      if (diff === 3) {
        return nums[i];
      }
    }
  }
  return nums[0];
};
