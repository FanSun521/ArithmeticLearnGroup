/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
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

//6,一道阅读理解题，看题看不懂，代码很简单；

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
// @lc code=end
