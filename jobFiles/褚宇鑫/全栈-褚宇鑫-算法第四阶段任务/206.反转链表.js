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
    //设置两个指针
    let pre = null;
    let cur = head;
    while(cur){
        //设置一个变量来记录下一个节点
        let tem = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tem;
    }
    //此时pre为头节点
    return pre;
};
// @lc code=end

