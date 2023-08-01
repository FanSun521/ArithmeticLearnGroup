/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let j;
    //像扑克牌整理手牌一样，保证起始位置开始的数组为升序，逐个将后面的插入到对应位置
    for (let i = 1; i < nums.length; i++) {
        //key为要插入的数
        let key = nums[i];
        //判断该插入到哪里，寻找比要插入的数小的数，大的数就往后移动一位
        for (j = i - 1; j >= 0 && nums[j] > key; j--) {
            nums[j + 1] = nums[j];
        }
        //插入
        nums[j + 1] = key;
    }
    return nums;
};