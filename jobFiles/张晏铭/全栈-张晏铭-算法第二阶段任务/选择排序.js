/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) { 
    let temp
    
    //遍历整个数据
    for (let i = 0; i <= nums.length - 1; i++) {
        //将第一个元素索引作为基准
        let minIndex = i

        //以后的所有元素作为对比并进行循环
        for (let j = i; j <= nums.length - 1; j++) {

            //若当前索引所对应的数据大于之后某个索引对应的数据，将其索引进行记录（替换）
            if (nums[minIndex] > nums[j]) {
                minIndex = j
            }
        }

        //替换索引值所代表的数据
        temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
    return nums

}