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
var deleteDuplicates = function (head) {
  if (head == null) {
    //防止空输
    return head;
  }
  let cur = head; //head是链表的起始地址，如果不新开一个，最后找不到链表的起始位置
  while ( cur.next ) {
    //防止对空指针操作
    if (cur.val === cur.next.val) {
      //如果cur指针指向的数和cur.next指向的值一样
      cur.next = cur.next.next; //就将后一个重复的数隔开
    } else {
      cur = cur.next; //正常遍历
    }
  }
  return head;  
};
// @lc code=end
