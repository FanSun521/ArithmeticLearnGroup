/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
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
    //递归结束条件
    if (head === null) {
        return head;
    }
    head.next = removeElements(head.next, val);
    //删除操作(若相等，删除后结点为head.next)
    if (head.val === val) {
        return head.next
    } else {
        return head
    }
};
// @lc code=end

