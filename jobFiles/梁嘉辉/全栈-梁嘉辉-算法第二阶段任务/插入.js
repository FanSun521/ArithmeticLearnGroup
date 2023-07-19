var sortArray = function(nums) {
   //准备一个新数组，储存新数组
  let arrr=[];
  arrr.push(nums[0]);
  //从第二项开始依次向前逐个比较
  for(let i=1;i<=nums.length-1;i++){
    // A是最新拿到的要向前比较的数
      let A=nums[i];
      //和arrr里已经储存的数字比较（从后向前比）
      for(let j=arrr.length-1;j>=0;j--){
        // B是A前面的数
          let B=arrr[j];
          //如果当前的数A比要比较的数B大了，把A放到B的后面
          if(A>B){
              arrr.splice(j+1,0,A);
              break;
          }
          //已经比到第一项，把数字A直接放到最前面
          if(j===0){
              arrr.unshift(A);
          }
      }
  }
  return arrr;
};