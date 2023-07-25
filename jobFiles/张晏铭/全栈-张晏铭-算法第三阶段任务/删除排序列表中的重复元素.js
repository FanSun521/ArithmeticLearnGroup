/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let current = head
    if (current == null) {
        return head
    }
    else {
        let pre = head
        while (pre != null) {
            let current = pre.next
            while (current != null) {
                if (pre.val == current.val) {
                    pre.next = current.next
                }
                current = current.next
            }
            pre = pre.next
        }
        return head
    }

};