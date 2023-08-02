/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //虚拟头节点
    const prehead = new ListNode(-1)
    let prev = prehead
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1
            list1 = list1.next
        } else {
            prev.next = list2
            list2 = list2.next
        }
        prev = prev.next
    }
    //此时至多还剩一个没有合并，将链表指向还未合并的那一项即可
    if (list1) {
        prev.next = list1
    } else {
        prev.next = list2
    }
    //返回新链表的头节点(虚拟头节点的下一位)
    return prehead.next
};
// @lc code=end

