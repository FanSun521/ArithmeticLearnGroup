/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var  newNums= []
// 去重
for(var item in nums){
    if(newNums.indexOf(nums[item])==-1){
        newNums.push(nums[item])
    }
}
// 排序
// for(var i=0;i<newNums.length-1;i++){
//     for(var j=0;j<newNums.length-1;j++){
//         if(newNums[j]<newNums[j+1]){
//             var temp=newNums[j]
//             newNums[j]=newNums[j+1]
//             newNums[j+1]=temp
//         }
//     }
// }
newNums.sort((a,b)=>a-b).reverse();
// 输出
if(newNums.length<3){
    return newNums[0]
}
return newNums[2]
};