/**
 * @param {number[]} nums
 * @return {number}
 */
//因为只需要找出让数组所有元素相等的最小操作次数，所以我们不需要考虑数组中各个元素的绝对大小，即不需要真正算出数组中所有元素相等时的元素值，只需要考虑数组中元素相对大小的变化即可。
//每次操作既可以理解为使n-1个元素增加 也可以理解使 1个元素减少
var minMoves = function (nums) {
  let move = 0;
  let min_move = Math.min(...nums); //对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
  for (i = 0; i < nums.length; ++i) {
    move += nums[i] - min_move;
  }
  return move;
};
