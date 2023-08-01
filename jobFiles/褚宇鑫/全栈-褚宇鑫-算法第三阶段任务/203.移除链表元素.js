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
var removeElements = function(head, val) {
  //方法一：虚拟头节点
  // const dummyNode = new ListNode(0);
  // dummyNode.next = head;
  // let tem = dummyNode;

  // while(tem.next !== null){
  //     if(tem.next.val == val){
  //         tem.next = tem.next.next;
  //     }else{
  //         tem = tem.next;
  //     }
      
  // }
  // return dummyNode.next
  //方法二：无头结点
  //当头节点元素就是要删除元素时，直接删除
  //条件顺序不能反，短路运算，当head为空时就没有val属性，所以需先判断是否为空
  while(head !== null&&head.val == val){
      head = head.next;
  }
  //特殊情况：当要链表元素全部是要删除元素时，删除后会使链表为空，会使tem指向null，从而无next报错
  //所以再加一个是否为空的判断，若为空则直接返回空链表
  if(head == null){
      return head;
  }

  let tem = head;
  
  while(tem.next !== null){
      if(tem.next.val == val){
          tem.next = tem.next.next;
      }else{
          tem = tem.next;
      }
      
  }
  return head
};