package third;

import java.util.List;

/**
 * 设计链表
 */
public class LeetCode707 {
    ListNode head;
    ListNode next;

    public LeetCode707() {
    }

    public LeetCode707(ListNode head) {
        this.head = head;
    }

    public LeetCode707(ListNode head, ListNode next) {
        this.head = head;
        this.next = next;
    }
    public int get(int index) {
        if(head == null) return -1;
        ListNode cur = head;
        for (int i = 0; cur != null; i++) {
            if(i == index) return cur.val;
            cur = cur.next;
        }
        return -1;
    }
    public void addAtHead(int val) {
        ListNode newNode = new ListNode(val, head);
        head = newNode;
    }
    public void addAtTail(int val) {
        if(head == null) {
            head = new ListNode(val);
        } else {
            ListNode cur = head;
            ListNode newNode = new ListNode(val);
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
    }
    public void addAtIndex(int index, int val) {
        if(head == null) {
            if(index == 0) {
                head = new ListNode(val);
            }
            return;
        }
        ListNode cur = head;
        int count = 0;
        while(cur.next != null) {
            if(++count == index) {
                ListNode temp = cur.next;
                cur.next = new ListNode(val);
                cur.next.next = temp;
            }
            cur = cur.next;
        }
    }
    public void deleteAtIndex(int index) {
        if (head == null) return;
        ListNode cur = head;
        int count = 0;
        while(cur.next != null) {
            if(++count == index) {
                if(cur.next.next != null) {
                    cur.next = cur.next.next;
                } else {
                    cur.next = null;
                }
            }
            cur = cur.next;
        }
    }


}
