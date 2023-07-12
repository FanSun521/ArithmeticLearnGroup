/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//思路为：将升序的数组取中间值分为两段，判断中间值与要查找的数的大小关系，再取符合要求的一段进行相同操作
var search = function (nums, target) {
    //取左中右三值
    let mid = parseInt(nums.length / 2), right = nums.length - 1, left = 0;
    //循环操作，不断更改左右区间，逼近目标数可能存在的目标区间
    while (left < right) {
        //如果查找到则返回下标
        if (target == nums[mid]) {
            return mid
        }
        //未找到则根据大小关系重新选取区间
        else if (target > nums[mid]) {
            left = mid + 1
            mid = parseInt((mid + right) / 2);
        }
        else if (target < nums[mid]) {
            right = mid - 1
            mid = parseInt((mid + left) / 2)
        }
    }
    //这段补一下第一个元素就是目标数的情况。防止查找失败
    if (nums[left] == target) {
        return left
    }
    //未找到则返回-1
    return -1
};