/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    let cur = head
    //当cur和cur.next都存在时
    while (cur !== null && cur.next !== null) {
        //如果相同则删除第二个
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next //cur移到下一位
        }
    }
    return head
};
// @lc code=end

