/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */

//龟兔赛跑算法
var hasCycle = function(head) {
    var node1=head;
    var node2=head;
    while(node2!=null&&node2.next!=null)
    {
        node1=node1.next;
        node2=node2.next.next;
        if(node1===node2)
        {
            return true;
        }
    }
    return false;
};
// @lc code=end

