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
    //若head === null
    if (head === null) {
        return head
    }
    //若head ！== null
    let cur = head;
    while (cur.next !== null) {
        //若cur.val === cur.next.val相同，将指针后移
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        }
        //若cur.val ！== cur.next.val相同，将cur后移
        else {
            cur = cur.next
        }
    }
    return head
};