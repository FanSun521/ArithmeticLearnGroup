// 1.从第一个元素开始，该元素可以认为已经被排序
// 2.取下一个元素tem，从已排序的元素序列从后往前扫描
// 3.如果该元素大于tem，则将该元素移到下一位
// 4.重复步骤3，直到找到已排序元素中小于等于tem的元素
// 5.tem插入到该元素的后面，如果已排序所有元素都大于tem，则将tem插入到下标为0的位置
// 6.重复步骤2~5
//思路左边大于右边交换
var sortArray = function(nums) {
    for(i = 0;i <= nums.length-1;i++){
        //记录预排序序列的最后一个元素下标
        let end = i;
        console.log(end,nums);
        //确定要进行插入的元素
        let tem = nums[end+1];
        while(end>=0){
            if(nums[end] >= tem){
                nums[end+1] = nums[end];
                end--;
                nums[end+1] = tem;
            }else{ 
                // nums[end+1] = tem;
                break;
            }   
        }
        
        // nums[end+1] = tem;
    }
    return nums;
};
console.log(sortArray([1,5,3]));