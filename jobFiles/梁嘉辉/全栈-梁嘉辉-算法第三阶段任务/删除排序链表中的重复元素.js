var deleteDuplicates = function(head) {
  // 如果链表为空则直接返回
  if (!head)  return head;
  let cur = head;
  while (cur.next) {
      // 如果当前节点的值等于后继节点的值，则删除后继节点
      if (cur.val === cur.next.val) {
          cur.next = cur.next.next;
      } else {   //不相等，则将当前节点后移一位
          cur = cur.next;
      }
  }
  return head;
};