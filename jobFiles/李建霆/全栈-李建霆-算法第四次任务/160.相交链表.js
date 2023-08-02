/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null && headB === null) {
    //如果任意链表为空，则无法相交；
    return null;
  }
  let PointerA = headA;
  let PointerB = headB; //定义双指针；
  while (PointerA != PointerB) {
    PointerA = PointerA === null ? headB : PointerA.next;
    PointerB = PointerB === null ? headA : PointerB.next;
    //如果PointerA 不为空，则指向下一位；如果为空，则让其指向另一链表的头节点；
  }
  return PointerA;
};
// @lc code=end
