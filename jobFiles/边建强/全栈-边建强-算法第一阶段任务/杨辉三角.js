/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [] , temp1 = [[1]] 
    var m=1
    for(var i=0;i<numRows;i++){
        var temp2 = []
        for(var j=1;j<i;j++){
            temp2[j] = temp1[j]+temp1[j-1]
        }
        temp2[0] = 1
        temp2[i] = 1
        result.push(temp2)
    m++
    temp1 = temp2
    }
    return result
    };