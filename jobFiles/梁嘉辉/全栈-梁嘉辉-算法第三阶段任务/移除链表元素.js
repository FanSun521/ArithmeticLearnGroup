var removeElements = function(head, val) {
  // head为空时直接返回head
  if (head === null) {
          return head;
      }
      head.next = removeElements(head.next, val);
      // 判断头结点值是否等于val,如果相等则删除头结点,不相等则保留头结点，依次递归，直至head为空
      return head.val === val ? head.next : head;
};