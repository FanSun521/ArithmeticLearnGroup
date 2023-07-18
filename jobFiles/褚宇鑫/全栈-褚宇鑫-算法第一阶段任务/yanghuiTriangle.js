let generate = function(numsRows){
    arr = [[1], [1, 1]];//创建一个二维数组用于存放后续的行
    if(numsRows == 1){
        arr.pop()//只有一行时删除第二行
        return arr;
    }else if(numsRows == 2){
        return arr;
    }else{
        nextRow = [];//预先创建一个下一行的数组
        for(let j = 1; j < numsRows-1; j++){ //第一层循环决定所需添加多少行
            for(let i = 0;i < arr[j].length-1; i++){//第二层循环用于添加下一行中的元素
                nextRow.push(arr[j][i]+arr[j][i+1]);//将上一行中对应的两项相加
            }
            nextRow.unshift(1);
            nextRow.push(1);//在行中首尾增添“1”项
            arr.push(nextRow);//添加到二维数组末尾
            nextRow = [];//将下一行重置
        }
        return arr
    }
}
generate(1);
console.log(arr);