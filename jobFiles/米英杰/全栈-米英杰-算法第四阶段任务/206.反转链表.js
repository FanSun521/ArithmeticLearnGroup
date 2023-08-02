/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    //prev指针指向前一项
    let prev = null;
    //cur指针指向当前项
    let cur = head
    while (cur) {
        //用temp暂存cur指针下一项
        let temp = cur.next
        //链表指针换向
        cur.next = prev
        prev = cur
        cur = temp
    }
    return prev
};
// @lc code=end

