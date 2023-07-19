//思路左边大于右边交换
var sortArray = function(nums) {
    let end = nums.length-1;
    while(end){
        //找一个跳出循环的标志
        let flag = 0;
        for(let i = 0;i < end;i++){
            if(nums[i] > nums[i+1]){
                let tem = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = tem;
                flag = 1;
            }
           
        }
        //如果比较之后数组已经是升序有序序列，则跳出当前循环
        if(flag == 0){
            break;
        }
        end--;
    }
    return nums;
};
console.log(sortArray(nums = [1,1,5,2,0,0]));