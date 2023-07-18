/**
 * 快速排序
 */
public class QuickSort {
    public int[] sortArray(int[] nums) {
        int[] sort = quickSort(nums, 0, nums.length);
        return sort;
    }

    public int[] quickSort(int[] nums, int low, int high) {
        int left = low;
        int right = high - 1;
        if(left >= right) {
            return nums;
        }
        int piovt = nums[left];
        while(left < right) {
            while(left < right && nums[right] > piovt) {
                right--;
            }
            if(left < right) {
                nums[left] = nums[right];
            }
            while(left < right && nums[left] < piovt) {
                left++;
            }
            if(left < right) {
                nums[right] = nums[left];
            }
            if(left >= right) {
                nums[left] = piovt;
            }
            quickSort(nums,low, right - 1);
            quickSort(nums,right +1, high);
        }
        return nums;
    }
}