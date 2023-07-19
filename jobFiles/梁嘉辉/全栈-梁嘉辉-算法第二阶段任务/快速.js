// 快速排序方法一
var sortArray = function(nums, left, right) {
  var len = nums.length,
      partitionIndex,
      left = typeof left != 'number' ? 0 : left,
      right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
      partitionIndex = partition(nums, left, right);
      sortArray(nums, left, partitionIndex-1);
      sortArray(nums, partitionIndex+1, right);
  }
  return nums;
}

function partition(nums, left ,right) {     // 分区操作
  var pivot = left,                      // 设定基准值（pivot）
      index = pivot + 1;
  for (var i = index; i <= right; i++) {
      if (nums[i] < nums[pivot]) {
          swap(nums, i, index);
          index++;
      }        
  }
  swap(nums, pivot, index - 1);
  return index-1;
}

function swap(nums, i, j) {
  var temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}


// 快速排序方法二
var sortArray = function(nums) {
  //结束递归（当arr中小于等于一项，则不用处理）
  if(nums.length<=1){
      return nums;
  }
  //找到数组中间项，在原有数组中将其移除
  let mid=Math.floor(nums.length/2);
  let midv=nums.splice(mid,1)[0];
  //准备左右两个数组，循环剩下数组中的每一项，比当前小的项放到左边数组中，反之放到右边数组中
  let left=[],
      right=[];
  for(let i=0;i<nums.length;i++){
      let item=nums[i];
      item<=midv?left.push(item):right.push(item);
  }
  return sortArray(left).concat(midv,sortArray(right));
};
