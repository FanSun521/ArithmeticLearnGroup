import java.util.Arrays;

/**
 * 选择排序
 */
public class SelectionSort {
    public int[] sortArray(int[] nums) {
        int[] arr = Arrays.copyOf(nums, nums.length);
        for (int i = 0; i < arr.length - 1; i++) {
            int min = i;
            for (int j = i + 1; j < arr.length; j++) {
                if(arr[min] > arr[j]) {
                    min = j;
                }
            }
            if(i != min){       //如果当前位置就是此位置之后的最小值则无需交换
                int temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
        return arr;
    }
}