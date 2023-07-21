// 思路：
// 每次从待排序列中选出一个最小值，然后放在序列的起始位置，直到全部待排数据排完即可。
// 实际上，我们可以一趟选出两个值，一个最大值一个最小值，然后将其放在序列开头和末尾，这样可以使选择排序的效率快一倍。
//思路左边大于右边交换
var sortArray = function(nums) {
    //记录最大最小值下标
    let max = 0,min = 0;
    //保存参与排序两个数组的下标
    let left = 0,right = nums.length-1;
    while(left <= right){
        //找出最大最小值
        let i = left;
        for(let i = left;i<=right;i++){
            if(nums[i] >= nums[max]){//两数相等时也需要互换位置
                max = i;
            }
            if(nums[i] <= nums[min]){
                min = i;
            }
        }
        //防止最大项在首项时被换掉
        if(left == max){
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
        //最小和最大值分别交换参与排序数组的首项和尾项
        [nums[left], nums[min]] = [nums[min], nums[left]];
        
        [nums[right], nums[max]] = [nums[max], nums[right]];
        //将始末位置向离移动一位
        left++;
        right--;
    }

    return nums;
};
console.log(sortArray(nums = [6,5,2,0,0]));
