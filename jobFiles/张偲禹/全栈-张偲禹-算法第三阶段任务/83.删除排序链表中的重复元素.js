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
    // 1.temp指向head。
    let temp = head;
    // 2.循环条件：链表不为空且存在至少两个节点。
    while(temp && temp.next){
        // 3.如果相等,该节点指针指向下一个的下一个节点;如果不等,指针后移继续循环。
        if (temp.val === temp.next.val){
            temp.next = temp.next.next;
        }else{
            temp = temp.next;
        }
    }
    return head;
};