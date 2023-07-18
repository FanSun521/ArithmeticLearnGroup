var generate = function(numRows) {
    let result = [[1]];
for(let i = 1; i < numRows; i++){
    result[i] = new Array();
    for(let j = 0; j <= i; j++){
        if(j === 0 || j === i){
            result[i][j] = 1;
        }else{
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }
}
return result;
};