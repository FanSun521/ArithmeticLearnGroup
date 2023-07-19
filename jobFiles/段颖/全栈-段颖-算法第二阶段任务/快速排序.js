
function sort(arr,begin,end){
    if(begin < end){
        let i = begin;
        let j = end;
        let empty = arr[begin];
        while(i < j){
            while(arr[j] > empty && i < j){
                j --;
            }
            arr[i] = arr[j];
            while(arr[i] < empty && i < j){
                i ++;
            }
            arr[j] = arr[i];
        }
        arr[i] = empty;
        sort(arr,begin,i-1);
        sort(arr,i+1,end);
    }else{
        return;
    }
}
