import java.util.Arrays;

/**
 * 最大操作数
 */
public class LeetCode453 {
    public int minMoves(int[] nums) {
        int min = Arrays.stream(nums).min().getAsInt();
        int sumResult = Arrays.stream(nums).sum();
        int result = sumResult - min * nums.length;
        return result;
    }
}