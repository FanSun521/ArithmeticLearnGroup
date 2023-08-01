package third;

import java.util.List;

/**
 * 移除链表元素
 */
public class LeetCode203 {
    /**
     * 不添加虚拟节点，单指针
     * @param head
     * @param val
     * @return
     */
    public ListNode removeElements01(ListNode head, int val) {
        while(head != null && head.val == val) {
            head = head.next;
        }
        ListNode cur = head;
        while(cur != null) {
            while (cur.next != null && cur.next.val == val) {   //确保当前节点指向的下一个节点一定和val不相等
                cur.next = cur.next.next;
            }
            cur = cur.next;                                        //指针移向下一个节点
        }
        return head;
    }

    /**
     * 不添加虚拟节点，双指针
     * @param head
     * @param val
     * @return
     */
    public ListNode removeElements02(ListNode head, int val) {
        while(head != null && head.val == val) {
            head = head.next;
        }
        if(head == null) {
            return head;
        }
        ListNode pre = head;
        ListNode cur = head.next;
        while(cur != null) {
            if(cur.val == val){
                pre.next = cur.next;
            } else {
                pre = cur;
            }
            cur = cur.next;
        }
        return head;
    }

    /**
     * 添加虚拟节点方式，与上一种方法相似，多创建了一个虚拟节点
     * @param head
     * @param val
     * @return
     */
    public ListNode removeElements03(ListNode head, int val) {
        if(head == null) return head;
        ListNode dummy = new ListNode(-1, head);
        ListNode pre = head;
        ListNode cur = head.next;
        while(cur != null) {
            if(cur.val == val){
                pre.next = cur.next;
            } else {
                pre = cur;
            }
            cur = cur.next;
        }
        return dummy.next;
    }
}
