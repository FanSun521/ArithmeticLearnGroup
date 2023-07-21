import java.util.Arrays;

/**
 * 冒泡排序
 */
public class BubbleSort {
    public int[] sortArray(int[] nums) {
        int[] arr = Arrays.copyOf(nums, nums.length);
        boolean flag = true;           //当整个内循环中没有交换时说明排序已完毕，跳出即可
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length - 1 - i; j++) {
                int temp;
                if(arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    flag = false;
                }
            }
            if(flag) {
                break;
            }
        }
        return arr;
    }
}