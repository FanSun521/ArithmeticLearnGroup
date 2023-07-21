import java.util.Arrays;

/**
 * 插入排序
 */
public class InsertSort {
    public int[] sortArray(int[] nums) {
        int[] arr = Arrays.copyOf(nums, nums.length);

        for (int i = 1; i < arr.length; i++) {
            int temp = arr[i];

            int j = i;
            while(j > 0 && temp < arr[j - 1]) {
                arr[j] = arr[j - 1];
                j--;
            }
            if(i != j) {
                arr[j] = temp;
            }
        }

        return arr;
    }