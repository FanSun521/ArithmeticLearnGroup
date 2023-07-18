var thirdMax = function(nums) {
    let result = Array.from(new Set(nums))
    let resu = result.sort((a, b) => a - b)
    if (resu.length < 3) {
        return resu[resu.length - 1]
    }
    else {
        return resu[resu.length - 3]
    }
};
let nums1 = [8,9]
let nums2 = [1,5,4,5,6,3,2,5,6,3,1,5,2,5,4,8,5,2,5,6,22,25,2,6]
let a = thirdMax(nums1)
let b = thirdMax(nums2)
console.log(a);
console.log(b);