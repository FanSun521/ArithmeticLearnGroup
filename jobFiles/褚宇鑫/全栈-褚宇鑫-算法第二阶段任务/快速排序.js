//思路:1、选出一个key（选取最左边的值作为key）
// 2、定义一个begin和一个end，begin从左向右走，end从右向左走。
// 3、在走的过程中，若end遇到小于key的数，则停下，begin开始走，直到begin遇到一个大于key的数时，将begin和right的内容交换，end再次开始走，如此进行下去，直到begin和end最终相遇，此时将相遇点的内容与key交换即可。
// 4.此时key的左边都是小于key的数，key的右边都是大于key的数
// 5.将key的左序列和右序列再次进行这种单趟排序，如此反复操作下去，直到左右序列只有一个数据，或是左右序列不存在时，便停止操作，此时此部分已有序

// function swap(a, b) {
//     var temp = a;
//     a = b;
//     b = temp;
// }

var sortArray = function(nums, begin = 0, end = nums.length-1) {
    let key = begin;
    let right = end;
    let left = begin+1;
    //如果区间不合法或只有一个数字，直接返回数组
    if(begin >= end){
        return nums;
    }
    while(begin < end){
        while(nums[end] >= nums[key] && begin < end){
            // console.log(end,'e',);
            end--;
        }
        while(nums[begin+1] <= nums[key] && begin < end){
            begin++;
            // console.log(begin,'b');
        }
        if(begin < end){
            [nums[begin+1], nums[end]] = [nums[end] ,nums[begin+1]];
            // console.log(nums);

        }
    }
    [nums[key], nums[end]] = [nums[end], nums[key]];
    key = end;
    sortArray(nums, left = key+1, right)
    sortArray(nums, left = 0, right = key-1)

    return nums;
};
console.log(sortArray(nums = [2,3,1,1,4,5,0,5,0]));