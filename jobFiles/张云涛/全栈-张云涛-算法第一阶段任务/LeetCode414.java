import java.util.Arrays;
import java.util.TreeSet;


/**
 * 第三大的数
 */
public class LeetCode414 {
    /**
     * 将数组从小到大排序，从数组末向前获取第三个不同的数，不够三个数返回最大值
     * @param nums
     * @return
     */
    public int thirdMax01(int nums[]) {
        Arrays.sort(nums);
        int count = 0;
        for (int i = nums.length - 1; i >= 0; i--) {
            if (nums[i] != nums[i-1] && ++count == 2) {
                return nums[i-1];
            }
        }
        return nums[nums.length - 1];
    }

    /**
     * 将数组中的数放入有序集合中，若集合长度大于3则将集合中第一个数移除，这样集合中的三个数永远是最大的三个数
     * @param nums
     * @return
     */
    public int thirdMax02(int nums[]) {
        TreeSet<Integer> result = new TreeSet<>();
        for (int num : nums) {
            result.add(num);
            if(result.size() > 3) {
                result.remove(result.first());
            }
        }
        return result.size() == 3 ? result.first() : result.last();
    }

    /**
     * 定义三个变量分别对应最大值，第二大的值，第三大的值；
     * 循环遍历数组，若该值大于最大值，将第二大的值赋值给第三大的值，最大值赋值给第二大的值，该值赋给最大值
     * 若该值小于最大值且大于第二大的值，将第二大的值赋值给第三大的值，该值赋给第二大的值
     * 若该值小于第二大的值且大于第三大的值，将该值赋给第三大的值
     *
     * 注：三个值初始化为Long类型的最小值，即-2^63；不能取int类型的最小值-2^31,这容易导致数组在包含三个数且其中有一个数的值为-2^31时被条件判断为返回最大值
     * @param nums
     * @return
     */
    public int thirdMax03(int nums[]) {
        long max = Long.MIN_VALUE, mid = Long.MIN_VALUE, min = Long.MIN_VALUE;
        for (int num: nums) {
            if (max < num) {
                min = mid;
                mid = max;
                max = num;
            } else if(mid < num && num < max) {
                min = mid;
                mid = num;
            } else if(min < num && num < mid) {
                min = num;
            }
        }
        return min != Long.MIN_VALUE  ? (int)min : (int)max;
    }
}
