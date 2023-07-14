var minMoves = function(nums) {
    let flag = 0
    let result = nums.sort((a,b) => a - b)
    for (let i = result.length -1 ; i > 0; i--) {
        flag += result[i] - result[0]
    }
    return flag
}; 
let nums = [1, 4, 5, 2, 1, 5, 89, 6, 3, 5, 5, 2, 65, 5, 5, 15, 65, 6, 89, 561, 65, 165, 6, 54, 156, 1, 65, 165]
let a = minMoves(nums)
console.log(a);