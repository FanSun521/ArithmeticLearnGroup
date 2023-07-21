/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let temp

    //遍历整个数组
    for(let i = 0; i <= nums.length - 1; i++) {
        
        //对单个数据进行重复对比，保证遍历整个数组后其位于正确位置
        for (let j = 0; j <= nums.length - 1 - i; j++) {

            //将大的数据与小的数据交换位置，达到排序的目的
            if(nums[j] > nums[j+1]){
                temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
    return nums

};