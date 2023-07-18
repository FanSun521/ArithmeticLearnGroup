/**
 * @param {number[]} nums
 * @return {number}
 */

//原思路（无法‘快速’处理过于庞大的数据量）：
var minMoves = function (nums) {
    let count = 0
    nums.sort((a, b) => b - a)
    let special = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] == nums[0]) {
            special++
        }
    }
    if (special == nums.length) {
        return count
    }

    for (let vol of nums) {
        if (vol >= 10000000) {
            return nums[0] - nums[nums.length - 1]
        }
        else if (vol <= - 10000000) {
            return nums[0] - nums[nums.length - 1]
        }
    }

    let flag = 1

    while (flag) {
        nums.forEach((a, b, c) => {
            if (b != 0) {
                c[b]++
            }
        })
        count++

        nums.sort((a, b) => b - a)

        special = 0
        for (let i = 0; i <= nums.length - 1; i++) {
            if (nums[i] == nums[0]) {
                special++
            }
        }
        if (special == nums.length) {
            flag = 0
            return count
        }
    }

};

//看完大佬们答案的思路（每次能让n-1个数加1，相当于每次能让一个数减1。既然是一个数减一，那么相等必然需要都等于最小的那个数，统计每个数到最小的数的距离。）：
var minMoves = function (nums) {
    nums.sort((a, b) => a - b);
    let min = nums[0];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        count += (nums[i] - min)
    }

    return count
}