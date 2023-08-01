/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
        // 1.将node的节点值修改为node.next的节点值。
        node.val = node.next.val;
        // 2.删除下一个节点。
        node.next = node.next.next;
};