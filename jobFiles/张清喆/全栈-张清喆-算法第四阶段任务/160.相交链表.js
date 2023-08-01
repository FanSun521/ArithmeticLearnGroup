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
    node1=headA;
    node2=headB;
    if(headA===null||headB===null)
    {
        return null;
    }
    while(node1!=node2)
    {
        if(node1===null)
        {
            node1=headB;
            continue;
        }
        if(node2===null)
        {
            node2=headA;
            continue;
        }
        node1=node1.next;
        node2=node2.next;
    }
    return node1;
};
// @lc code=end

