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
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(-1);
  let p = dummy;
  // 两个链表都有值的情况
  while (l1 != null && l2 != null) {
    // 比较 l1 和 l2 两个指针,将值较小的的节点接到 p 指针
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    // p 指针不断前进
    p = p.next;
  }
  p.next = l1 == null ? l2 : l1;
  return dummy.next;
};