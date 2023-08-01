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
    //判断头节点是否为val
    while (head !== null && head.val === val) {
        head = head.next
    }
    //若头节点为null
    if (head === null) {
        return head
    }
    //若头节点不为null
    let cur = head
    //遍历链表
    while (cur.next !== null) {
        //相同则将指针后移
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            //不同则进入下一个
            cur = cur.next
        }
    }
    return head
};