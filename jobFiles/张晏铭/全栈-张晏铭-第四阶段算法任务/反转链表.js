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
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head
    }
    else {
        let count = 0;
        let final = head;
        let mid = head
        while (final.next) {
            final = final.next
            count++
        }
        mid = final
        let mid2 = mid
        for (let i = 0; i < count; i++) {
            final = head
            for (let j = 0; j < count - i - 1; j++) {
                final = final.next
            }
            final.next = null
            mid2.next = final
            mid2 = mid2.next
        }
        return mid
    }
};