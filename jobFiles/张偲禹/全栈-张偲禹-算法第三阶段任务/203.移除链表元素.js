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
var removeElements = function(head, val) {
    // 1.如果链表为空,返回head。
    if(head === null){
        return head;
    }
    // 2.判断head.val,可进行递归操作。
    // 2.1 如果头节点的数据域的值为val,删除head,即将head向后移。
    // 2.2 如果头节点的值不为val,则head保留。
    head.next = removeElements(head.next,val);
    return head.val == val? head.next :head; 
};