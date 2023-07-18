var generate = function(numRows) {
  // const arr=[]
  // // const arrr=[]
  // for(var i=0;i<numRows;i++){
  //     for(var n=0;n<i;n++){
  //         if(n==0||n==i){
  //             arr[i][n]=1
  //         }else{
  //             arr[i][n]=arr[i-1][n]+arr[i-1][n-1]
  //         }
  //     }
  // }
  if(numRows==1){
      return [[1]]
  }else if(numRows==2){
      return [[1],[1,1]]
  }else{
      var arr=[[1],[1,1]]
      for(var i=2;i<numRows;i++){
          let arrr=[1]
          for(var n=1;n<i;n++){
              arrr.push(arr[i-1][n]+arr[i-1][n-1])
          }
          arrr.push(1)
          arr.push(arrr)
      }
      return arr
  }
  
};