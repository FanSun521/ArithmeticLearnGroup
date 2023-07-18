/**
 * @param {number[]} nums
 * @return {number}
 */

//方法一：
var thirdMax = function (nums) {
    numsCopy = [...new Set(nums)].sort((a, b) => a - b)
    if (numsCopy.length == 1 || numsCopy.length == 3) {
        return numsCopy[0]
    }

    else if (numsCopy.length == 2) {
        return numsCopy[1]
    }

    else if (numsCopy.length > 3) {
        return numsCopy[numsCopy.length - 3]
    }
};

//方法二：
var thirdMax = function (nums) {
    numsCopy = [...new Set(nums)].sort((a, b) => b - a)
    let max = numsCopy[0]
    let count = 1
    for (let vol of numsCopy) {
        if (vol < max && numsCopy.length > 2) {
            max = vol
            count++
        }
        if (count == 3) {
            return max
        }
    }
    return max
};

//方法三(低内存【推测是因为未使用集合】)：
var thirdMax = function (nums) {
    numsCopy = nums.sort((a, b) => b - a)
    let max = numsCopy[0]
    let count = 1
    for (let vol of numsCopy) {
        if (vol < max) {
            max = vol
            count++
        }
        if (count == 3) {
            return max
        }
    }
    if (count == 1) {
        return max
    }
    if (count == 2) {
        return numsCopy[0]
    }
};