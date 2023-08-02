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
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null
    }
    let curA = headA
    let curB = headB
    //若两指针走完自己的节点，再走对方独有的节点时相遇（所走路程相同），则为相交节点
    while (curA !== curB) {
        if (curA) {
            curA = curA.next
        } else {
            curA = headB
        }
        if (curB) {
            curB = curB.next
        } else {
            curB = headA
        }
    }
    return curA
};
// @lc code=end

