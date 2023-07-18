/**
 *二分查找
 */
public class LeetCode704 {
    /**
     * 左闭右闭
     * @param nums
     * @param target
     * @return
     */
    public int search01(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        int mid;
        while(left <= right) {
            mid = (right + left) / 2;
            if(target < nums[mid]) {
                right = mid - 1;
            } else if (target < nums[left]) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    /**
     * 左闭右开
     * @param nums
     * @return
     */
    public int search02(int[] nums, int target) {
        int left = 0;
        int right = nums.length;
        int mid;
        while(left < right) {
            mid = (right + left) / 2;
            if(target < nums[mid]) {
                right = mid;
            } else if(target > nums[mid]) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}