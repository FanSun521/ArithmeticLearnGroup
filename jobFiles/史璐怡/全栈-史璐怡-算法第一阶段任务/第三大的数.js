/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let first = null, second = null, third = null;
    for (const num of nums) {
        if (first === null || num > first) {
            third = second;
            second = first;
            first = num;
        } else if (first > num && (second === null || num > second)) {
            third = second;
            second = num;
        } else if (second !== null && second > num && (third === null || num > third)) {
            third = num;
        }
    }
    return third === null ? first : third;
};