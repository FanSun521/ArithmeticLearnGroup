var generate = function(numRows) {
    let arr = new Array()
    if (numRows == 1) {
        arr[0] = [1]
    }
    else if (numRows == 2) {
        arr[0] = [1]
        arr[1] = [1,1]
    }
    else {
        arr[0] = [1]
        arr[1] = [1, 1]
        for (let i = 2; i < numRows; i++) {
            let b = new Array()
            b[0] = 1
            b[i] = 1
            for (let j = 1; j < i; j++) {
                b[j] = arr[i-1][j-1] + arr[i-1][j]
            }
            arr[i] = b
        }
    }
    return arr
};
let numRows = 6
let d = generate(numRows)
console.log(d);