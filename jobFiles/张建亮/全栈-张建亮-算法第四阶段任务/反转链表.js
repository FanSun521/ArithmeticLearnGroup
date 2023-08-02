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
    let cur = head
    let pre = null
    //遍历链表
    while (cur !== null) {
        //暂存next
        let next = cur.next
        //使next指向上一个节点
        cur.next = pre
        //移动pre，cur到下一个节点
        pre = cur
        cur = next
    }
    return pre
};