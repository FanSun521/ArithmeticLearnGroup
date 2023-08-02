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
    //遍历链表
    while (head) {
        //如果遍历到标记节点，说明有环
        if (head.sign === true) {
            return true
        }
        //对所有遍历过的节点进行标记
        head.sign = true
        head = head.next
    }
    //反之，则无环
    return false
};