/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head == null) {
        return false
    }
    else {
        let pre = head
        let cur = head.next
        if (pre === cur) {
            return true
        }
        while (cur) {
            pre = pre.next
            cur = cur.next
            if (cur == null) {
                return false
            }
            cur = cur.next
            if (cur == pre) {
                return true
            }
        }
        return false
    }
};