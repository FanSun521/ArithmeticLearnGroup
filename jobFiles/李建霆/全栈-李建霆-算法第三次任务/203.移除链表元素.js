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
    //内容为空的情况
    if (head == null) {
        return head;
    }
    //要删除的节点为头节点的情况
    while (head != null && head.val == val) {
        head = head.next;
    }
    //不是头节点的情况
    let cur = head;
    // 为了找到要删除的前一个节点和后一个节点
    while (cur!== null && cur.next !== null) {  //避免对空指针操作
        if (cur.next.val == val) {  //要删除的节点为cur.next
            cur.next = cur.next.next;   //next指向改变
        } else {
             cur = cur.next;               //正常向下一位寻找
        }
      
    }
    return head;    
};

// @lc code=end
