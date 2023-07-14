/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    let num1 = -Infinity
    let num2 = -Infinity
    let num3 = -Infinity
    for(let temp of nums) {
        if(temp > num1) {
            num3 = num2;
            num2 = num1;
            num1 = temp;
            continue;
        }else if(temp > num2 && temp !== num1) {
            num3 = num2;
            num2 = temp;
            continue;
        }else if(temp > num3 && temp !== num2 && temp !== num1){
            num3 = temp;
            continue;
        };
    }
    return num3 === -Infinity ? num1 : num3
};