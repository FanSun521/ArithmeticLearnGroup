package third;

/**
 * 删除链表中的重复元素
 */
public class LeetCode83 {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode cur = head;
        while(cur!= null) {
            while(cur.next != null && cur.val == cur.next.val) {
                cur.next = cur.next.next;
            }
            cur = cur.next;
        }
        return head;
    }
}
