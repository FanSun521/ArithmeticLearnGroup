/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    //将第一个数据作为基准，遍历第二个元素及其以后的元素
    for (let i = 1; i <= nums.length - 1; i++) {
        preIndex = i - 1

        //确定未对比的元素的其中之一
        current = nums[i]

        //循环将未对比的元素对比以排序好的数据，将大的数据位置向后移动一位
        while (preIndex >= 0 && nums[preIndex] > current) {
            nums[preIndex + 1] = nums[preIndex]
            preIndex--
        }

        //将未对比的元素放置在相应的位置
        nums[preIndex + 1] = current
    }
    return nums

}