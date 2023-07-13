import java.util.ArrayList;
import java.util.List;

/**
 * 杨辉三角
 */
public class LeetCode118 {
    public List<List<Integer>> generate(int numRows) {
        ArrayList<List<Integer>> integers = new ArrayList<>();
        ArrayList<Integer> integers1 = new ArrayList<>();
        ArrayList<Integer> integers2 = new ArrayList<>();
        integers1.add(1);
        integers2.add(1);
        integers2.add(1);
        integers.add(integers1);
        if (numRows == 1) {
            return integers;
        }
        integers.add(integers2);
        for (int i = 2; i < numRows; i++) {
            ArrayList<Integer> integers3 = new ArrayList<>();
            for (int j = 0; j < i + 1; j++) {
                if (j == 0 || j == i) {
                    integers3.add(1);
                } else {
                    integers3.add(integers.get(i-1).get(j-1) + integers.get(i-1).get(j) );
                }
            }
            integers.add(integers3);
        }
        return integers;
    }
}