var minMoves = function(nums) {
    const minNum = Math.min(...nums);
    let sum = 0;
    console.log(minNum);
    for(const num of nums){
        sum += num - minNum; 
    }
    return sum;
};