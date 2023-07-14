var thirdMax = function(nums) {
        const array = Array.from(new Set(nums))
        let arr=array.sort()
        let result=arr.reverse()
        if(result.length>=3){
            return result[2]
        }
        else{
            return result[0]
        }
    };