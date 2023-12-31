/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    while(head !== null && head.val ===val) {
        head = head.next;
    }
    let cur = head;
    while(cur !== null && cur.next !== null) {
        if(cur.next.val === val) {
            cur.next =  cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return head;
};