/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let temp

    //冒泡排序
    for(let i = 0; i <= nums.length - 1; i++) {
        for(let j = 0; j <= nums.length - 1 - i; j++) {
            if(nums[j] > nums[j+1]){
                temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
    return nums


    //选择排序
    for(let i = 0; i <= nums.length - 1; i++) {
        let minIndex = i
        for(let j = i; j <= nums.length - 1; j++) {
            if(nums[minIndex] > nums[j]) {
                minIndex = j 
            }
        }
        temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
    return nums


    //插入排序
    for (let i = 1; i <= nums.length - 1; i++) {
        preIndex = i - 1
        current = nums[i]
        while (preIndex >= 0 && nums[preIndex] > current) {
            nums[preIndex + 1] = nums[preIndex]
            preIndex--
        }
        nums[preIndex + 1] = current
    }
    return nums


    //快速排序
    function quickSort(arr, begin, end) {
        //递归出口 左指针和右指针相等时候，说明只有一个值
        if (begin >= end) return;

        var l = begin; // 左指针
        var r = end; //右指针
        var temp = arr[begin]; //基准数，这里取数组第一个数
        //左右指针相遇的时候退出扫描循环
        while (l < r) {

            //右指针从右向左扫描，碰到第一个小于基准数的时候停住
            while (l < r && arr[r] >= temp) r--;

            //左指针从左向右扫描，碰到第一个大于基准数的时候停住
            while (l < r && arr[l] <= temp) l++;

            //交换左右指针所停位置的数
            [arr[l], arr[r]] = [arr[r], arr[l]];
        }
        //最后交换基准数与指针相遇位置的数
        [arr[begin], arr[l]] = [arr[l], arr[begin]];
        //递归处理左右数组
        quickSort(arr, begin, l - 1);
        quickSort(arr, r + 1, end);
        return arr;
    }

    quickSort(nums, 0, nums.length - 1)

};